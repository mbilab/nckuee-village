var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 15, ev = 'game.ev['+map+']['+id+']', name = '電儀表學';
game.ev[map][id] = new game.Ev({
	can_take: function() {
	if ( game.defined( game, 'ev', 2, 1, 'took' ) ) return true;
//		RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][1].name+' ！';
		RPGJS.Variables.data[0] = '需要先修 普通物理學（二） ！';
		return false;
	},
	hp_cost: function() { return 8; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('什麼是電儀表呢？修了你就知道…其實一點也不難。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('假設Ａ＝１００±２％Ｂ＝３００±１％，若Ｃ＝Ａ＋Ｂ，請問C的相對誤差範圍是？'),
				'CHOICES: ["４００±３％","４００±１.２５％","４００±２％"]',
				'CHOICE_0',
					s(ev+'.fail("好課值得一修再修，加油！")'),
				'CHOICE_1',
					s(ev+'.take()'),
				'CHOICE_2',
					s(ev+'.fail("加油好嗎？")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
