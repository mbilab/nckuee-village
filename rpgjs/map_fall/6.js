(function(){
	var name = '大一英文';
	var id = 6;
	game.ev[id] = {
		can_took: function() { },
		hp_cost: function() { return 'undefined' === typeof game.eng_14_15 ? 8 : 0; },
		init: function(){
			var e = RPGJS.Map.createEvent( id, 5, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.script( 'is_took', id ),
				'IF: "0 == variable[0]"',
					game.show_text('請問你的學測英文是幾級分？'),
					'CHOICES: ["14-15 級分","14 級分以下"]',
					'CHOICE_0',
						'SCRIPT: {"text": "game.eng_14_15 = 1;"}',
						game.script( 'take', id ),
						game.show_text('%V[0]'),
					'CHOICE_1',
						game.script( 'take', id ),
						game.show_text('%V[0]'),
					'ENDCHOICES',
				"ELSE",
					game.show_text('你已經修過 '+name+' 了！'),
				"ENDIF",
			]);
			e.display();
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
