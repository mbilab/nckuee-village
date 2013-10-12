(function(){
	var map = 1, id = 16, ev = 'game.ev['+map+']['+id+']';
	var name = '電工廠實習';
	game.ev[map][id] = {
		hp_cost: function() { return 10; },
		id: id,
		init: function(){
			RPGJS.setEvent(map,id,[
				{
					"id":id,
					"x":5,
					"y":11,
					"name":id
				},
				[{
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
				'commands': [
				game.show_text('漫漫黑夜嘆孤伶　鐘聲悠揚意難禁\\n自古紅顏多厄運　默默沉哀到三更\\n黃花飄落似有意　綠水東流卻無情\\n誰家男兒願留我　遠離脂粉冷淒淒\\n且把灰塵消除盡　白日永久放光明'),
				game.show_text('＜玩家＞奇怪…這不是實習課嗎，難道我走錯教室了？'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.script( 'take', ev ),
						'ENDIF',
					"ENDIF",
					game.show_text('%V[0]'),
				'CHOICE_1',
				'ENDCHOICES',
				]
				}]]);
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
