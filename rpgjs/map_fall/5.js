(function(){
	var map = 1, id = 5, ev = 'game.ev['+map+']['+id+']';
	var name = '基礎國文';
	game.ev[map][id] = {
		hp_cost: function() { return 8; },
		id: id,
		init: function(){
			this.e = RPGJS.Map.createEvent( id, 4, 1 );
			this.e.addPage({
				'frequence': game.ev.frequence,
				'graphic': 6,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
			}, [
				game.script('remove_type_move', ev+'.e','&quote;'+game.ev.type+'&quote;'),
				game.show_text('身為工程人員還是要有基本的文學素養！'),
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
								"SHOW_PICTURE: {'id': '"+id+"_4', 'filename':'"+id+"_4.jpg','align':'middle','operand-type':'constant'}",
								game.show_text('%V[0]'),
								"ERASE_PICTURE: {'id': '"+id+"_4' }",
							'CHOICE_1',
								"SHOW_PICTURE: {'id': '"+id+"_1', 'filename':'"+id+"_1.jpg','align':'middle','operand-type':'constant','x':300,'y':80}",
								game.show_text('＜項羽＞同學…不是我喔…'),
								"ERASE_PICTURE: {'id': '"+id+"_1' }",
							'CHOICE_2',
								"SHOW_PICTURE: {'id': '"+id+"_2', 'filename':'"+id+"_2.jpg','align':'middle','operand-type':'constant','x':300,'y':80}",
								game.show_text('＜劉備＞同學…不是我喔…'),
								"ERASE_PICTURE: {'id': '"+id+"_2' }",
							'CHOICE_3',
								"SHOW_PICTURE: {'id': '"+id+"_3', 'filename':'"+id+"_3.jpg','align':'middle','operand-type':'constant','x':300,'y':80}",
								game.show_text('＜趙雲＞同學…不是我喔…'),
								"ERASE_PICTURE: {'id': '"+id+"_3' }",
							'ENDCHOICES',
						'ELSE',
							game.show_text('%V[0]'),
						'ENDIF',
					"ELSE",
						game.show_text('你已經修過 '+name+' 了！'),
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
