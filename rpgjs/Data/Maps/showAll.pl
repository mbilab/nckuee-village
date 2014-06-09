#!usr/bin/perl -W
use strict;
use warnings;
use JSON;

my $json = JSON->new;
my $amount = 100;
my $line = $amount/25;
my $filename = "MAP-ALL.json";

if($ARGV[0]){$amount = $ARGV[0];}

my @mediumShit = ((((undef,undef,undef)) x 25 ) x $line);

for(my $i = 0;$i<$amount;$i++){
	$mediumShit[0][int($i/25)][$i%25][0] = $i;
	$mediumShit[0][int($i/25)][$i%25][1] = undef;
	$mediumShit[0][int($i/25)][$i%25][2] = undef;
}
my $data_to_json = {"map"=>@mediumShit};
open (my $fh, '>' , $filename) or die;
print $fh $json->encode($data_to_json);
close ($fh);
