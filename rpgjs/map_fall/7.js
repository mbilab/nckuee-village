(function(){
	var map = 1, id = 7, ev = 'game.ev['+map+']['+id+']';
	var name = '大一體育';
	game.ev[map][id] = {
		hp_cost: function() { return game.ev[map][id].hp_cost_; },
		id: id,
		init: function(){
			this.e = RPGJS.Map.createEvent( id, 6, 1 );
			this.e.addPage({
				'frequence': game.ev.frequence,
				'graphic': 8,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
			}, [
				game.script('set_type_move', ev+'.e','&quote;'+game.ev.type+'&quote;'),
				game.script( 'is_took', ev ),
				'IF: "0 == variable[0]"',
					game.show_text('多動多健康，你想要修習怎麼樣的課呢？'),
					'CHOICES: ["籃球","排球","游泳","韻律","水中有氧","國標舞","我再考慮一下"]',
					'CHOICE_0',
						'SCRIPT: {"text": "'+ev+'.hp_cost_ = 12;"}',
						game.script( 'take', ev ),
						game.show_text('%V[0]'),
					'CHOICE_1',
						'SCRIPT: {"text": "'+ev+'.hp_cost_ = 10;"}',
						game.script( 'take', ev ),
						game.show_text('%V[0]'),
					'CHOICE_2',
						'SCRIPT: {"text": "'+ev+'.hp_cost_ = 15;"}',
						game.script( 'take', ev ),
						game.show_text('%V[0]'),
					'CHOICE_3',
						'SCRIPT: {"text": "'+ev+'.hp_cost_ = 5;"}',
						game.script( 'take', ev ),
						game.show_text('%V[0]'),
					'CHOICE_4',
						'SCRIPT: {"text": "'+ev+'.hp_cost_ = 10;"}',
						game.script( 'take', ev ),
						game.show_text('%V[0]'),
					'CHOICE_5',
						'SCRIPT: {"text": "'+ev+'.hp_cost_ = 10;"}',
						game.script( 'take', ev ),
						game.show_text('%V[0]'),
					'CHOICE_6',
					'ENDCHOICES',
				"ELSE",
					game.show_text('你已經修過 '+name+' 了！'),
				"ENDIF",
				game.script('set_type_move', ev+'.e','&quote;'+game.ev.type+'&quote;'),
			]);
			this.e.display();
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
