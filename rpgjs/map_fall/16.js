(function(){
	var name = '電工廠實習';
	var id = 16;
	game.ev[id] = {
		can_took: function() { },
		hp_cost: function() { return 10; },
		init: function(){
			var e = RPGJS.Map.createEvent( id, 15, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.show_text('漫漫黑夜嘆孤伶　鐘聲悠揚意難禁\\n自古紅顏多厄運　默默沉哀到三更\\n黃花飄落似有意　綠水東流卻無情\\n誰家男兒願留我　遠離脂粉冷淒淒\\n且把灰塵消除盡　白日永久放光明'),
				game.show_text('＜玩家＞奇怪…這不是實習課嗎，難道我走錯教室了？'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', id ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', id ),
						'IF: "1 == variable[0]"',
							game.script( 'take', id ),
							game.show_text('習得了 '+name+' ！\\n消耗 %V[0] 點體力，還剩 %V[1] 點體力。'),
						'ELSE',
							game.show_text('%V[0]'),
						'ENDIF',
					"ELSE",
						game.show_text('%V[0]'),
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
