(function(){
	var map = 1, id = 14, ev = 'game.ev['+map+']['+id+']';
	var name = '電磁（一）';
	game.ev[map][id] = {
		can_take: function() {
			if ( game.defined( 'ev', 2, 1, 'took' ) ) return true;
//			RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][1].name+' ！';
			RPGJS.Variables.data[0] = '需要先修 普通物理學（二） ！';
			return false;
		},
		hp_cost: function() { return 18; },
		id: id,
		init: function(){
			RPGJS.setEvent(map,id,[
				{
					"id":id,
					"x":11,
					"y":9,
					"name":id
				},
				[{
				'frequence': game.ev.frequence,
				'graphic': 15,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
				'commands': [
				game.script('remove_type_move', id,'&quote;'+game.ev.type+'&quote;'),
				game.show_text('電學與磁學有著緊密的關係，本課程會介紹兩者間的種種密不可分關係，Maxwell’s Laws 是貫穿本學習的重要定律，想要學會電磁學，就不能不懂Maxwell’s Law。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.show_text('請問那下列哪一條並非Maxwell’s Law？'),
							'CHOICES: ["電通量密度＝介電係數×電場強度","電通量密度的散度＝單位體積電荷密度","磁通量密度的散度＝０","磁場強度的旋度＝單位面積電流密度＋單位時間內電通量密度的變化"]',
							'CHOICE_0',
								game.show_text('恭喜答對了呦～正確的應該是電場強度的旋度＝－單位時間內磁通量密度的變化'),
								game.script( 'take', ev ),
							'CHOICE_1',
								game.v0('不然你覺得什麼才是Maxwell’s Laws？再修一次會更清楚。'),
							'CHOICE_2',
								game.v0('不然你覺得什麼才是Maxwell’s Laws？再修一次會更清楚。'),
							'CHOICE_3',
								game.v0('不然你覺得什麼才是Maxwell’s Laws？再修一次會更清楚。'),
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
