var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 44, ev = 'game.ev['+map+']['+id+']', name = '電機工程倫理';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 5; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('本課程是為了成大電機系同學精心打造的課程，其中包括電機系八大組的介紹，還會安排講者來為同學們講解職場上的一些倫理，以及面臨困境的心靈調適。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('在職場上難免會遇到挫折，有很多公司都把心理輔導列為公司的福利之一，對於這方面你是否有在關心呢？請問電機系的心理輔導師在哪兒呢？'),
				'CHOICES: ["敬業校區－學生輔導組","勝利校區－學生輔導組","光復校區－學生輔導組"]',
				'CHOICE_0',
					s(ev+'.take("答對了!")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了，是在敬業校區喔!")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了，是在敬業校區喔!")'),
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
