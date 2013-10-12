(function(){
	var map = 1, id = 15, ev = 'game.ev['+map+']['+id+']';
	var name = '電儀表學';
	game.ev[map][id] = {
		can_take: function() {
			if ( game.defined( 'ev', 2, 1, 'took' ) ) return true;
//			RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][1].name+' ！';
			RPGJS.Variables.data[0] = '需要先修 普通物理學（二） ！';
			return false;
		},
		hp_cost: function() { return 8; },
		id: id,
		init: function(){
			RPGJS.setEvent(map,id,[
				{
					"id":id,
					"x":13,
					"y":9,
					"name":id
				},
				[{
				'frequence': game.ev.frequence,
				'graphic': 16,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
				'commands': [
				game.script('remove_type_move', id,'&quote;'+game.ev.type+'&quote;'),
				game.show_text('什麼是電儀表呢？修了你就知道…其實一點也不難。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.show_text('假設Ａ＝１００±２％Ｂ＝３００±１％，若Ｃ＝Ａ＋Ｂ，請問C的相對誤差範圍是？'),
							'CHOICES: ["４００±３％","４００±１.２５％","４００±２％"]',
							'CHOICE_0',
								game.cmd_v0('好課值得一修再修，加油！'),
							'CHOICE_1',
								game.show_text('恭喜答對了'),
								game.script( 'take', ev ),
							'CHOICE_2',
								game.cmd_v0('加油好嗎？'),
							'ENDCHOICES',
						'ENDIF',
					"ENDIF",
					game.show_text('%V[0]'),
				'CHOICE_1',
				'ENDCHOICES',
				game.script('set_type_move', id,'&quote;'+game.ev.type+'&quote;'),
				],
			}]]);
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
