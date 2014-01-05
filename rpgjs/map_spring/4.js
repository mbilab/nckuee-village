var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 4, ev = 'game.ev['+map+']['+id+']', name = '計算機概論（二）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( !game.defined( game, 'ev', 1, 4, 'took' ) ) RPGJS.Variables.data[0] = '需要先修 '+game.ev[1][4].name+' ！';
		else if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 20; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	s(ev+'.is_took()'),
	'IF: "0 == variable[0]"',
		s(ev+'.can_take()'),
		'IF: "1 == variable[0]"',
			t('請問\nint i, *p; i=5; p=&i; *p=1;\nprintf(" %d, %d ", *p, i );\n輸出是？'),
			'CHOICES: ["5, 1","1, 5","1, 1","5, 5"]',
			'CHOICE_0',
				s(ev+'.fail("殘念！ＰＯＩＮＴＥＲ的觀念不好！要再加強！")'),
			'CHOICE_1',
				s(ev+'.fail("殘念！ＰＯＩＮＴＥＲ的觀念不好！要再加強！")'),
			'CHOICE_2',
				s(ev+'.take("ＰＡＳＳ！恭喜恭喜！！")'),
			'CHOICE_3',
				s(ev+'.fail("殘念！ＰＯＩＮＴＥＲ的觀念不好！要再加強！")'),
			'ENDCHOICES',
		'ENDIF',
	'ENDIF',
	t('%V[0]'),
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
