(function(){
	var id = 2;
	game.ev[id] = {
		init: function(){
			var e = RPGJS.Map.createEvent( id, 1, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.show_text('<¶}³õ¤¶²Ð>'),
			]);
			e.display();
		},
	};
})();

// vi:nowrap:sw=4:ts=4
