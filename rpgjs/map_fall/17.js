var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 17, ev = 'game.ev['+map+']['+id+']', name = '普通化學';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('化學學得好就恭喜你，化學學得不好就拿王水潑你！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問王水是如何配置的？'),
				'CHOICES: ["硝酸＋硝酸＋硝酸，比例１：１：１","硝酸＋鹽酸，比例１：３","硝酸＋鹽酸，比例１：３","鹽酸＋鹽酸＋鹽酸，比例１：１：１"]',
				'CHOICE_0',
					s(ev+'.fail("都放水成這樣你還選錯")'),
				'CHOICE_1',
					s(ev+'.take("答對了！你沒被毀容")'),
				'CHOICE_2',
					s(ev+'.fail("差一點點答對，比例是硝：鹽＝１：３喔～")'),
				'CHOICE_3',
					s(ev+'.fail("都放水成這樣你還選錯")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
	'CHOICE_1',
	'ENDCHOICES',
	'IF: "0 != variable[0]"',
		t('%V[0]'),
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4