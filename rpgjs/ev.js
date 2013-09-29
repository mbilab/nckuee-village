
game.can_take = function(id) {
	if ( game.ev[id].can_take && !game.ev[id].can_take() ) return;
	if ( game.hp >= game.ev[id].hp_cost() ) RPGJS.Variables.data[0] = 1;
	else RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
}

game.is_took = function(id) {
	if ( 'undefined' === typeof game.took[id] ) RPGJS.Variables.data[0] = 0;
	else RPGJS.Variables.data[0] = '你已經修過 '+game.ev[id].name+' 了！';
}

game.script = function(s) {
	var args = Array.prototype.slice.call(arguments, 1).join(',');
	return 'SCRIPT: {"text": "game.'+s+'('+args+')"}';
}

game.show_text = function(t) {
	if ( -1 === t.search('\\\\n') ) t = t.replace(/(.{21})/g,'$1\\n');
	return 'SHOW_TEXT: {"text": "'+t+'"}';
}

game.take = function(id) {
	if ( game.ev[id].take && !game.ev[id].take() ) return;
	var hp_cost = game.ev[id].hp_cost();
	if ( game.hp < hp_cost ) {
		RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		return;
	}
	game.hp -= hp_cost;
	game.n_took++;
	game.took[id] = true;
	RPGJS.Variables.data[0] = '習得了 '+game.ev[id].name+' ！\n消耗 '+hp_cost+' 點體力，還剩 '+game.hp+' 點體力。';
}

// vi:nowrap:sw=4:ts=4
