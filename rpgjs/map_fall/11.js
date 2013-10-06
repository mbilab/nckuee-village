(function(){
	var map = 1, id = 11, ev = 'game.ev['+map+']['+id+']';
/*
bargain
培根 => 答案是議價，可惜答錯囉～體力扣５
議價 =>  恭喜答對了～進入下一題，體力扣０
請求 =>  答案是議價，可惜答錯囉～體力扣５
seduce
減少 => 別灰心～能答對到第三題已經很棒了，體力扣２
果醬 =>  別灰心～能答對到第三題已經很棒了，體力扣２
誘惑=>  恭喜答對了，全對真是太厲害了～體力扣０
*/
	var name = '大二英文';
	game.ev[map][id] = {
		hp_cost: function() { return 8; },
		id: id,
		init: function(){
			this.e = RPGJS.Map.createEvent( id, 5, 9 );
			this.e.addPage({
				'frequence': game.ev.frequence,
				'graphic': 12,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
			}, [
				game.script('remove_type_move', ev+'.e','&quote;'+game.ev.type+'&quote;'),
				game.show_text('＜開場介紹＞'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.show_text('請翻譯ｒａｄｉｏ'),
							'CHOICES: ["收音機","錄影帶","吹風機"]',
							'CHOICE_0',
								game.show_text('恭喜答對了～進入下一題，體力扣 0 點'),
							'CHOICE_1',
								'SCRIPT: {"text": "game.hp -= 8"}',
								game.v0('正解是收音機，連這麼基本的都答錯，英文要加強喔！！\\n體力扣 8 點'),
							'CHOICE_2',
								'SCRIPT: {"text": "game.hp -= 8"}',
								game.v0('正解是收音機，連這麼基本的都答錯，英文要加強喔！！\\n體力扣 8 點'),
							'ENDCHOICES',
						'ENDIF',
					"ENDIF",
					game.show_text('%V[0]'),
				'CHOICE_1',
				'ENDCHOICES',
				game.script('set_type_move', ev+'.e','&quote;'+game.ev.type+'&quote;'),
			]);
			this.e.display();
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
