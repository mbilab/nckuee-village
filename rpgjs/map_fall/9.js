(function(){
	var map = 1, id = 9, ev = 'game.ev['+map+']['+id+']';
	var name = '電路（一）';
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
			this.e = RPGJS.Map.createEvent( id, 11, 7 );
			this.e.addPage({
				'frequence': game.ev.frequence,
				'graphic': 10,
   		   		'speed': game.ev.speed,
				'trigger': 'action_button',
				'type': game.ev.type,
			}, [
				game.script('remove_type_move', ev+'.e','&quote;'+game.ev.type+'&quote;'),
				game.show_text('電路學的基礎是以克希荷夫定律為基礎，探討電子元件（電阻、電容、電感等）之電壓與電流的關係，本學期所教的電路以使用直流電為主，而交流電部分將留到下學期。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', ev ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', ev ),
						'IF: "1 == variable[0]"',
							game.show_text('克希荷夫定律分為克希荷夫電流定律與克希荷夫電壓定律，克希荷夫電流定律指的是「所有進入某節點的電流總和等於所以離開此節點的電流總和」，而克希荷夫電壓定律指的是「沿著閉合迴路所有元件兩端的電壓總和為零」，以上兩條定律乃電路學的兩大精隨，汝必謹記。'),
							game.v0('＜玩家＞是的，吾必當謹記在心。'),
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
