(function(){
	var name = '普通物理學（一）';
	var id = 2;
	game.ev[id] = {
		can_took: function() { },
		hp_cost: function() { return 10; },
		init: function(){
			var e = RPGJS.Map.createEvent( id, 1, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.show_text('助人為快樂之本，普物為電機之本。普通物理學之於電機人，就像是陽光、空氣、水之於生物體一般。若此關不過、那你的電機人生只好重頭來過。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', id ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', id ),
						'IF: "1 == variable[0]"',
							game.show_text('請問動者恆動、靜者恆靜，是牛頓第幾定律？'),
							'CHOICES: ["牛頓第一定律","牛頓第二定律","牛頓第三定律"]',
							'CHOICE_0',
								game.script( 'take', id ),
								game.show_text('習得了 '+name+' ！\\n消耗 %V[0] 點體力，還剩 %V[1] 點體力。'),
							'CHOICE_1',
								game.show_text('孩子呀，你還是重頭來過吧！'),
							'CHOICE_2',
								game.show_text('孩子呀，你還是重頭來過吧！'),
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
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
