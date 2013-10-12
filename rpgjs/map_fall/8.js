(function(){
	var map = 1, id = 8, ev = 'game.ev['+map+']['+id+']';
	var name = '電子（一）';
	game.ev[map][id] = {
		can_take: function() {
			if ( game.defined( 'ev', 2, 1, 'took' ) ) return true;
//			RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][1].name+' ！';
			RPGJS.Variables.data[0] = '需要先修 普通物理學（二） ！';
			return false;
		},
		hp_cost: function() { return 10; },
		id: id,
		init: function(){
			RPGJS.setEvent(map,id,[
				{
					"id":id,
					"x":9,
					"y":7,
					"name":id
				},
				[{
				'frequence': game.ev.frequence,
				'graphic': 9,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
				'commands': [
				game.script('remove_type_move', id,'&quote;'+game.ev.type+'&quote;'),
				game.show_text('在此課程中，會介紹你電子元件的特性及應用，像ＢＪＴ、ＣＭＯＳ…以及使用這些元件兜成的基本電路跟電路特性。目前最常被使用的原件是ＣＭＯＳ，但在高頻的情形下，ＢＪＴ能具有它的優勢。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.show_text('請問如果設計的電路是高頻電路，那麼該選用下列哪一個電子元件？'),
							'CHOICES: ["ＣＭＯＳ","ＢＪＴ"]',
							'CHOICE_0',
								game.v0('不對喔'),
							'CHOICE_1',
								game.script( 'take', ev ),
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
