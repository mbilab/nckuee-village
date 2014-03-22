var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 13, ev = 'game.ev['+map+']['+id+']', name = '控制工程';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 12; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('控制工程是很妙的一門課程，實際上在工業界幾乎沒有公司是專門做控制的，但是幾乎所有的公司都需要控制工程師，你就知道控制有多麼重要了。控制工程是一門將控制的方法以數學的模型來描述的一門課程，在這門課程中你會發現很多事物上都有控制的影子，好奇了嗎？咱們課堂上見吧！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問在拉式轉換中，ｆ（ｔ）＝ｔｕ（ｔ），則轉換之Ｆ（ｓ）為？'),
				'CHOICES: ["1","1/s","1/s^2","1/s+a"]',
				'CHOICE_0',
					s(ev+'.fail()'),
				'CHOICE_1',
					s(ev+'.fail()'),
				'CHOICE_2',
				    s(ev+'.take("答對了")'),
				'CHOICE_3',
					s(ev+'.fail()'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
