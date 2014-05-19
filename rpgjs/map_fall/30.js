var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 30, ev = 'game.ev['+map+']['+id+']', name = '行動運算與創意應用';
game.ev[map][id] = new game.Ev({
		hp_cost: function() { return 10; },
	    id: id,
	    map: map,
	    name: name,
}, [
    s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('這堂課可以了解現在科技發展的概況，並透過期中及期末的專題報告來發或我們的創意。也會有一些小程式作業來培養我們發揮創意的能力，有興趣嗎?快來修吧!'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('你是否能運用這些年在電機系所學的課程來實現自己的創意呢?'),
				'CHOICES: ["可以","不行"]',
	 			'CHOICE_0',
					s(ev+'.take("來課堂上分享你的創意吧!")'),
				'CHOICE_1',
					s(ev+'.fail("快來上課培養你的創新能力!")'),
				'ENDCHOICES',
			'ENDIF',
	'CHOICE_1',
	'ENDCHOICES',
	"ENDIF",
	'IF: "0 != variable[0]"',
		t('%V[0]'),
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
