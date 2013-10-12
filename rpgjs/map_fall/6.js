(function(){
	var map = 1, id = 6, ev = 'game.ev['+map+']['+id+']';
	var name = '大一英文';
	game.ev[map][id] = {
		hp_cost: function() { return 'undefined' === typeof game.eng_14_15 ? 8 : 0; },
		id: id,
		init: function(){
			RPGJS.setEvent(map,id,[
				{
					"id":id,
					"x":5,
					"y":7,
					"name":id
				},
				[{
				'frequence': game.ev.frequence,
				'graphic': 7,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
				'commands':[
				game.script('remove_type_move', id,'&quote;'+game.ev.type+'&quote;'),
				game.script( 'is_took', ev ),
				'IF: "0 == variable[0]"',
					game.show_text('請問你的學測英文是幾級分？'),
					'CHOICES: ["14-15 級分","14 級分以下","我還不想修這門課"]',
					'CHOICE_0',
						'SCRIPT: {"text": "game.eng_14_15 = 1;"}',
						game.script( 'take', ev ),
						game.show_text('%V[0]'),
					'CHOICE_1',
						game.script( 'take', ev ),
						game.show_text('%V[0]'),
					'CHOICE_2',
					'ENDCHOICES',
				"ELSE",
					game.show_text('你已經修過 '+name+' 了！'),
				"ENDIF",
				game.script('set_type_move', id,'&quote;'+game.ev.type+'&quote;'),
				]
				}]]);
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
