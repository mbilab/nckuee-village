var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 2, ev = 'game.ev['+map+']['+id+']', name = '普通物理學（一）';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('助人為快樂之本，普物為電機之本。普通物理學之於電機人，就像是陽光、空氣、水之於生物體一般。若此關不過、那你的電機人生只好重頭來過。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問動者恆動、靜者恆靜，是牛頓第幾定律？'),
				'CHOICES: ["牛頓第一定律","牛頓第二定律","牛頓第三定律"]',
				'CHOICE_0',
					s(ev+'.take()'),
				'CHOICE_1',
					v0('孩子呀，看來你的以後會很難過，加油！'),
				'CHOICE_2',
					v0('孩子呀，看來你的以後會很難過，加油！'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
