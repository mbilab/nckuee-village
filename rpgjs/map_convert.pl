#!/usr/bin/perl -w 

use strict;
use GD;
use JSON;
use YAML;

if($ARGV[0] and $ARGV[0] =~ /\.(:?JPG|jpg|PNG|png|GIF|gif)$/){
	&graph_rpgjs2tiled($ARGV[0]);
	exit;
}
my $map = &load_json($ARGV[0]);
my $output = $ARGV[1] || "output.json";
my %cfg = (
	data_dir => 'Data',
	default_tile => $ARGV[2] || 0,
	graphics_dir => 'Graphics'
);
$map or print "Nothing to read!\nUsage -\n\tmap_convert.pl JSONFILE [OUPUT]\n\tmap_convert.pl AUTOTILE [OUTPUT_PNG]\n" and exit;

defined $map->{layers} and &tiled2rpgjs;
defined $map->{map} and &rpgjs2tiled;

sub graph_rpgjs2tiled {
	my $fn = shift;
	my $output = $ARGV[1] || "output.png";

	my $img;
	$fn =~ /\.(?:png|PNG)/ and $img = GD::Image->newFromPng($fn);
	$fn =~ /\.(?:jpg|JPG)/ and $img = GD::Image->newFromJpeg($fn);
	$fn =~ /\.(?:gif|GIF)/ and $img = GD::Image->newFromGif($fn);
	($img->width == 96 and $img->height == 128) or die "Invalid autotile !\n";
	my $new_img = new GD::Image(160,96);
	$new_img->copy($img,0,0,0,32,96,96);
	$new_img->copy($img,96,64,32,0,32,32);
	$new_img->copy($img,96+16,0+16,64+16,0+16,16,16);
	$new_img->copy($img,128,0+16,64,0+16,16,16);
	$new_img->copy($img,96+16,32,64+16,0,16,16);
	$new_img->copy($img,128,32,64,0,16,16);

	$new_img->copy($img,96,0,32,64,16,32);
	$new_img->copy($img,96,32,32,64,16,32);

	$new_img->copy($img,96+16,0,32,64,32,16);

	$new_img->copy($img,128+16,0,32,64,16,32);
	$new_img->copy($img,128+16,32,32,64,16,32);

	$new_img->copy($img,96+16,32+16,32,64,32,16);
	open FH,">$output" or die;
	binmode FH;
	print FH $new_img->png;
	close FH;
}
sub tiled2rpgjs {
	my %ret;
	for (my ($i,$auto) = (0,0); $i <= $#{$map->{tilesets}}; $i++){
		$map->{tilesets}[$i]{name} !~ /tileset/ and $map->{tilesets}[$i]{autotile} = $auto++;
	}
	for my $layer ( @{$map->{layers}} ){
		for my $j ( 0 .. $map->{height}-1){
			for my $i ( 0 .. $map->{width}-1){
			  	$_ = shift @{$layer->{data}};
				$_ or next;

				if(defined $ret{map}[$i][$j]){
					my $c = $ret{map}[$i][$j];
					$ret{map}[$i][$j] = [ $c->[0], &convert_tile('rpgjs',$_), $c->[2]];
				}else{
					$ret{map}[$i][$j] = [ &convert_tile('rpgjs',$_),undef,undef];
				}
			}
		}
	}
	&save_json($output,\%ret);
}
sub rpgjs2tiled {
  	my $M = &load_json("$cfg{data_dir}/Materials.json");
	$M or die "$cfg{data_dir}/Materials.json not found!";

  	my %ret = (
		height => scalar @{$map->{map}[0]},
		layers => [
			{
				data => [],
				height => scalar @{$map->{map}[0]},
				name => '圖層 1',
				opacity => 1,
				type => 'tilelayer',
				visible => 1,
				width => scalar @{$map->{map}},
				x => 0,
				y => 0
			},
			{
				data => [],
				height => scalar @{$map->{map}[0]},
				name => '圖層 2',
				opacity => 1,
				type => 'tilelayer',
				visible => 1,
				width => scalar @{$map->{map}},
				x => 0,
				y => 0
			}
		],
		orientation => 'orthogonal',
		properties => {},
		tileheight => 32,
		tilewidth => 32,
		version => 1,
		width => scalar @{$map->{map}}
	);
	my $gid = 1;
	for ( values %{$M->{tilesets}} ){
	  	my $path = "$cfg{graphics_dir}/Tilesets/$_";
		-e $path or die "$path not found !";
		my ($name) = /^(.*?)\./;
		my $img;
		/\.(?:png|PNG)/ and $img = GD::Image->newFromPng($path);
		/\.(?:jpg|JPG)/ and $img = GD::Image->newFromJpeg($path);
		/\.(?:gif|GIF)/ and $img = GD::Image->newFromGif($path);
		$img or die "Unknown image format!";

		push @{$ret{tilesets}}, {
		  				firstgid => $gid,
						image => $_,
						imageheight => $img->height,
						imagewidth => $img->width,
						margin => 0,
						name => $name,
						properties => {},
						spacing => 0,
						tileheight => 32,
						tilewidth => 32
					};
		$gid += int($img->width*$img->height/(1024));
	}
	$cfg{last_tile_id} = $gid;
	for ( values %{$M->{autotiles}} ){
	  	my $path = "$cfg{graphics_dir}/Autotiles/$_";
		-e $path or die "$path not found !";
		my ($name) = /^(.*?)\./;
		my $img;
		/\.(?:png|PNG)/ and $img = GD::Image->newFromPng($path);
		/\.(?:jpg|JPG)/ and $img = GD::Image->newFromJpeg($path);
		/\.(?:gif|GIF)/ and $img = GD::Image->newFromGif($path);
		$img or die "Unknown image format!";

		push @{$ret{tilesets}}, {
		  				firstgid => $gid,
						image => $_,
						imageheight => $img->height,
						imagewidth => $img->width,
						margin => 0,
						name => $name,
						properties => {},
						spacing => 0,
						terrains => [
							{
								name => $name."_in",
								tile => 6
							},
							{
								name => $name."_out",
								tile => 13
							}
						],
						tileheight => 32,
						tiles => {
							0 => { terrain => [ 1, 1, 1, 0] },
							1 => { terrain => [ 1, 1, 0, 0] },
							2 => { terrain => [ 1, 1, 0, 1] },
							3 => { terrain => [ 0, 0, 0, 1] },
							4 => { terrain => [ 0, 0, 1, 0] },
							5 => { terrain => [ 1, 0, 1, 0] },
							6 => { terrain => [ 0, 0, 0, 0] },
							7 => { terrain => [ 0, 1, 0, 1] },
							8 => { terrain => [ 0, 1, 0, 0] },
							9 => { terrain => [ 1, 0, 0, 0] },
							10 => { terrain => [ 1, 0, 1, 1] },
							11 => { terrain => [ 0, 0, 1, 1] },
							12 => { terrain => [ 0, 1, 1, 1] },
							13 => { terrain => [ 1, 1, 1, 1] }
						},
						tilewidth => 32
					};
		$gid += 15;
	}
	for my $j ( 0..$#{$map->{map}[0]} ){
		for my $i ( 0..$#{$map->{map}} ){
			push @{$ret{layers}[0]{data}}, &convert_tile('tiled',$map->{map}[$i][$j][0]);
			push @{$ret{layers}[1]{data}}, &convert_tile('tiled',$map->{map}[$i][$j][1]);
		}
	}
	&save_json($output,\%ret);
}
sub convert_tile{
	my $type = shift;
	my $id = shift;
	my $new;
	if($type eq 'rpgjs'){
		$#{$map->{tilesets}} < 0 and die "No tilesets";
		my $i;
		for ($i = 0; $i <= $#{$map->{tilesets}}; $i++){
			if($id < $map->{tilesets}[$i]{firstgid} ){
				last;
			}
		}
		#if(defined $map->{tilesets}[$i-1]{terrains}){
		if($map->{tilesets}[$i-1]{name} !~ /tileset/){
			$_ = &terrain_transfer('rpgjs',$id - $map->{tilesets}[$i-1]{firstgid});
			$new = $_<0? 3072+ $cfg{default_tile}: 48*$map->{tilesets}[$i-1]{autotile}+$_;
		}else{
			$new = 3072 + $id - $map->{tilesets}[$i-1]{firstgid};
		}
	}elsif($type eq 'tiled'){
	  	$new = 0;
		length $id and $new = $id < 3072 ?  &terrain_transfer('tiled',$id) + $cfg{last_tile_id} : $id - 3071;
	}
	return $new;
}
sub load_json {
	my $fn = shift;
	my $text;
	my $ret;

	($fn and -e $fn) or return;
	open FH,$fn;
	while(<FH>){
		$text .= $_;
      	}
	close FH;

	eval{ $ret = decode_json($text); };
	return $ret;
}
sub save_json {
	my $fn = shift;
	my $j = shift;
	open my $fh, ">$fn";
	print $fh to_json($j,{canonical=>1,pretty=>1});
	close $fh;
}
sub terrain_transfer {
	my $type = shift;
	my $id = shift;
	my @map = (34,20,36,4,8,16,0,24,2,1,40,28,38,-1);
	if($type eq 'rpgjs'){
		$id > $#map and return -1;
		return $map[$id];
	}elsif($type eq 'tiled'){
		my $offset = int($id/48);
		for my $i (0..$#map){
			$offset*48+$map[$i] eq $id and return $offset*15+$i; 
		}
      	}
	return 0;
}
