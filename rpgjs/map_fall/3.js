var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 3, ev = 'game.ev['+map+']['+id+']', name = '微積分（一）';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('工程數學、控制工程…，電機系的數學也是想當重要的，想要好好過你的電機人生，微積分也是重要的基礎喔～'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問 dp/dq 是對什麼微分？'),
				'CHOICES: ["對 p","對 q","兩者皆不是"]',
				'CHOICE_0',
					t('要重修囉～'),
				'CHOICE_1',
					s(ev+'.take()'),
				'CHOICE_2',
					t('要重修囉～'),
				'ENDCHOICES',
			"ENDIF",
		"ENDIF",
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
