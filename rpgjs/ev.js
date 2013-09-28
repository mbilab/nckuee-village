
game.show_text = function(t) {
	return 'SHOW_TEXT: {"text": "'+t.replace(/(.{21})/g,'$1\\n')+'"}';
}

game.take = function(c) {
	game.n_took++;
	game.took[c] = true;
}

// vi:nowrap:sw=4:ts=4
