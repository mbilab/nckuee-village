var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 15, ev = 'game.ev['+map+']['+id+']', name = '電儀表學';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( !game.defined( game, 'ev', 2, 2, 'is_passed' ) ) RPGJS.Variables.data[0] ='要通過' + game.ev[2][2].name+'才可以選修本課！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 8; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('你知道什麼是電儀表嘛？你想了解在國中高中時所使用的安培計、歐姆計、伏特計的原理嘛？還是你想知道醫院裡面的心電圖儀器是用什麼原理來量測的呢？趕緊來修吧！！'),
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
