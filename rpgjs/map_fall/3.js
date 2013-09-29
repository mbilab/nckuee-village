(function(){
	var name = '微積分（一）';
	var id = 3;
	game.ev[id] = {
		can_took: function() { },
		hp_cost: function() { return 10; },
		init: function(){
			var e = RPGJS.Map.createEvent( id, 2, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.show_text('工程數學、控制工程…，電機系的數學也是想當重要的，想要好好過你的電機人生，微積分也是重要的基礎喔～'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', id ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', id ),
						'IF: "1 == variable[0]"',
							game.show_text('請問 dp/dq 是對什麼微分？'),
							'CHOICES: ["對 p","對 q","兩者皆不是"]',
							'CHOICE_0',
								game.script( 'take', id ),
								game.show_text('%V[0]'),
							'CHOICE_1',
								game.show_text('要重修囉～'),
							'CHOICE_2',
								game.show_text('要重修囉～'),
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
