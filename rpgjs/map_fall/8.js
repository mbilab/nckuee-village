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
		hp_cost: function() { return 8; },
		id: id,
		init: function(){
			this.e = RPGJS.Map.createEvent( id, 7, 1 );
			this.e.addPage({
				'frequence': game.ev.frequence,
				'graphic': 9,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
			}, [
				game.script('remove_type_move', ev+'.e','&quote;'+game.ev.type+'&quote;'),
				game.show_text('在此課程中，會介紹你電子元件的特性及應用，像是 BJT、CMOS…以及使用這些元件兜成的基本電路跟電路特性。目前最常被使用的原件是 CMOS，但在高頻的情形下，BJT 能具有它的優勢。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.show_text('請問出師表“出師未捷身先死”，指的是誰？'),
							'CHOICES: ["諸葛亮","項羽","劉備","趙雲"]',
							'CHOICE_0',
								game.script( 'take', ev ),
								game.show_text('%V[0]'),
							'CHOICE_1',
								game.show_text('＜項羽＞同學…不是我喔…'),
							'CHOICE_2',
								game.show_text('＜劉備＞同學…不是我喔…'),
							'CHOICE_3',
								game.show_text('＜趙雲＞同學…不是我喔…'),
							'ENDCHOICES',
						'ELSE',
							game.show_text('%V[0]'),
						'ENDIF',
					"ELSE",
						game.show_text('%V[0]'),
					"ENDIF",
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
