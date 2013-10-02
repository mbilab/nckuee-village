(function(){
	var map = 1, id = 2, ev = 'game.ev['+map+']['+id+']';
	var name = '普通物理學（一）';
	game.ev[map][id] = {
		hp_cost: function() { return 10; },
		id: id,
		init: function(){
			var e = RPGJS.Map.createEvent( id, 1, 1 );
			e.addPage({
				'frequence': game.ev.frequence,
				'graphic': 3,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
			}, [
				game.show_text('助人為快樂之本，普物為電機之本。普通物理學之於電機人，就像是陽光、空氣、水之於生物體一般。若此關不過、那你的電機人生只好重頭來過。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.show_text('請問動者恆動、靜者恆靜，是牛頓第幾定律？'),
							'CHOICES: ["牛頓第一定律","牛頓第二定律","牛頓第三定律"]',
							'CHOICE_0',
								game.script( 'take', ev ),
								game.show_text('%V[0]'),
							'CHOICE_1',
								game.show_text('孩子呀，看來你的以後會很難過，加油！'),
							'CHOICE_2',
								game.show_text('孩子呀，看來你的以後會很難過，加油！'),
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
