(function(){
	var id = 15;
	game.ev[id] = {
		init: function(){
			var e = RPGJS.Map.createEvent( id, 14, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.show_text('歡迎來到「甸跡世界」，這世界是個充滿知識的神秘空間，每個在這個世界中的物品、生物都圍繞著各自獨特的「知識能量」，整個世界構築於知識的基礎上，「知識就是一切」，你必須找出在這個世界中的「知識之門」，並蒐集散落在各地區的知識寶石，才能將知識之門打開，回到你原本的世界。'),
			]);
			e.display();
		},
	};
})();

// vi:nowrap:sw=4:ts=4
