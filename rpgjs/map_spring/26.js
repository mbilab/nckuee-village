var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 26, ev = 'game.ev['+map+']['+id+']', name = '電子材料概論';
game.ev[map][id] = new game.Ev({

	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('電子材料百百種，想要一窺究竟嗎？那就快來修課吧！別猶豫了！'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('你覺得哪一個敘述是不合理的？'),
				'CHOICES: ["電阻之所以叫電阻，是因為它會阻止電流的流動","電容之所以叫電容，是因為它可以容納電流","電感之所以叫電感，是因為它很容易被電流感動"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！這哪裡不合理了")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！這哪裡不合理了")'),
				'CHOICE_2',
					s(ev+'.take("答對了！恭喜！")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
