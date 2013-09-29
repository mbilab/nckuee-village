(function(){
	var name = '基礎國文';
	var id = 5;
	game.ev[id] = {
		can_took: function() { },
		hp_cost: function() { return 8; },
		init: function(){
			var e = RPGJS.Map.createEvent( id, 4, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.show_text('身為工程人員還是要有基本的文學素養！'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', id ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', id ),
						'IF: "1 == variable[0]"',
							game.show_text('請問出師表“出師未捷身先死”，指的是誰？'),
							'CHOICES: ["諸葛亮","項羽","劉備","趙雲"]',
							'CHOICE_0',
								game.script( 'take', id ),
								game.show_text('%V[0]'),
							'CHOICE_1',
								game.show_text('＜項羽＞同學…不是我喔…'),
							'CHOICE_2',
								game.show_text('＜劉備＞同學…不是我喔…'),
							'CHOICE_3',
								game.show_text('＜趙雲＞同學…不是我喔…'),
							'ENDCHOICES',
						'ELSE',
							game.show_text('%V[0]'),
						'ENDIF',
					"ELSE",
						game.show_text('你已經修過 '+name+' 了！'),
					"ENDIF",
				'CHOICE_1',
				'ENDCHOICES',
			]);
			e.display();
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
