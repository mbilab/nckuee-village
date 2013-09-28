(function(){
	var name = '普通物理學（一）';
	var id = 2;
	game.ev[id] = {
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
					game.show_text('請問動者恆動、靜者恆靜，是牛頓第幾定律？'),
					'CHOICES: ["牛頓第一定律","牛頓第二定律","牛頓第三定律"]',
					'CHOICE_0',
						'SCRIPT: {"text": "game.take('+id+')"}',
						game.show_text('習得了 '+name+' ！'),
					'CHOICE_1',
						game.show_text('孩子呀，你還是重頭來過吧！'),
					'CHOICE_2',
						game.show_text('孩子呀，你還是重頭來過吧！'),
					'ENDCHOICES',
				'CHOICE_1',
				'ENDCHOICES',
			]);
			e.display();
		},
		take: function(){
		},
	};
})();

// vi:nowrap:sw=4:ts=4
