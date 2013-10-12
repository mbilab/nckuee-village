(function(){
	var map = 1, id = 4, ev = 'game.ev['+map+']['+id+']';
	var name = '計算機概論（一）';
	game.ev[map][id] = {
		hp_cost: function() { return 20; },
		id: id,
		init: function(){
			RPGJS.setEvent(map,id,[
				{
					"id":id,
					"x":11,
					"y":5,
					"name":id
				},
				[{
				'frequence': game.ev.frequence,
				'graphic': 5,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
				'commands': [
				game.script('remove_type_move', id,'&quote;'+game.ev.type+'&quote;'),
				game.show_text('電腦科學，不同以往國、高中的一般科目，此課程是你在大一課程中接觸到最靠近專業電機領域的科目。我們將會教你目前比較多人使用的兩種程式語言，Ｃ語言以及ＪＡＶＡ，第一次碰程式難免陌生，多加練習會有幫助的。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.show_text('請問下列程式碼的輸出為何？\nint a=1,b=2; a+=3; b++; printf("%d %d",a,b)'),
							'CHOICES: ["4, 3","3, 4","4, 4"]',
							'CHOICE_0',
								game.script( 'take', ev ),
							'CHOICE_1',
								game.v0('好課值得一修再修'),
							'CHOICE_2',
								game.v0('好課值得一修再修'),
							'ENDCHOICES',
						'ENDIF',
					"ENDIF",
					game.show_text('%V[0]'),
				'CHOICE_1',
				'ENDCHOICES',
				game.script('set_type_move', id,'&quote;'+game.ev.type+'&quote;'),
				]
				}]]);
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
