(function(){
	var name = '大一體育';
	var id = 7;
	game.ev[id] = {
		can_took: function() { },
		hp_cost: function() { return game.ev[id].hp_cost_; },
		init: function(){
			var e = RPGJS.Map.createEvent( id, 6, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.script( 'is_took', id ),
				'IF: "0 == variable[0]"',
					game.show_text('多動多健康，你想要修習怎麼樣的課呢？'),
					'CHOICES: ["籃球","排球","游泳","韻律","水中有氧","國標舞","我再考慮一下"]',
					'CHOICE_0',
						'SCRIPT: {"text": "game.ev['+id+'].hp_cost_ = 12;"}',
						game.script( 'take', id ),
						game.show_text('%V[0]'),
					'CHOICE_1',
						'SCRIPT: {"text": "game.ev['+id+'].hp_cost_ = 10;"}',
						game.script( 'take', id ),
						game.show_text('%V[0]'),
					'CHOICE_2',
						'SCRIPT: {"text": "game.ev['+id+'].hp_cost_ = 15;"}',
						game.script( 'take', id ),
						game.show_text('%V[0]'),
					'CHOICE_3',
						'SCRIPT: {"text": "game.ev['+id+'].hp_cost_ = 5;"}',
						game.script( 'take', id ),
						game.show_text('%V[0]'),
					'CHOICE_4',
						'SCRIPT: {"text": "game.ev['+id+'].hp_cost_ = 10;"}',
						game.script( 'take', id ),
						game.show_text('%V[0]'),
					'CHOICE_5',
						'SCRIPT: {"text": "game.ev['+id+'].hp_cost_ = 10;"}',
						game.script( 'take', id ),
						game.show_text('%V[0]'),
					'CHOICE_6',
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
