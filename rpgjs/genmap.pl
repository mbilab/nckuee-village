#!/usr/bin/perl -w 

use strict;
use JSON;

my %map;
my $h = 15;
my $w = 20;
my $ori = &load_json('sample.json');
for( my $i = 1; $i < 19; $i ++){
	$ori->{'map'}[$i][0][1] = &axis(1,2);
	$ori->{'map'}[$i][1][1] = &axis(1,3);
	$ori->{'map'}[$i][13][1] = &axis(1,5);
	$ori->{'map'}[$i][14][1] = &axis(1,6);
}
for( my $i = 1; $i < 14; $i ++){
	$ori->{'map'}[0][$i][1] = &axis(0,4);
	$ori->{'map'}[19][$i][1] = &axis(2,4);
}
	$ori->{'map'}[0][0][1] = &axis(0,2);
	$ori->{'map'}[0][1][1] = &axis(0,3);
	$ori->{'map'}[19][0][1] = &axis(2,2);
	$ori->{'map'}[19][1][1] = &axis(2,3);
	$ori->{'map'}[0][13][1] = &axis(0,5);
	$ori->{'map'}[0][14][1] = &axis(0,6);
	$ori->{'map'}[19][13][1] = &axis(2,5);
	$ori->{'map'}[19][14][1] = &axis(2,6);
&save_json("MAP-1.json",$ori);
sub axis{
	my $x = shift;
	my $y = shift;
	return "".(3072+$y*8+$x);
}
sub load_json {
	my $fn = shift;
	my $text;
	-e $fn or return;
	open FH,$fn;
	$text = <FH>;
	close FH;

	my $ret;
	eval{ $ret = decode_json($text); };
	return $ret;
}
sub save_json {
	my $fn = shift;
	my $j = shift;
	open my $fh, ">$fn";
	print $fh to_json($j);
	close $fh;
}
