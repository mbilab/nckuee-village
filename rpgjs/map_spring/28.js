var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 28, ev = 'game.ev['+map+']['+id+']', name = '光纖通訊';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('現代網路媒體可以快速發展，有賴於網路通訊技術的提昇。其中光纖通訊就是其中一種突破，使得訊號得以長距離傳輸。本課程主要介紹光纖的基本傳輸原理、光元件、光網路架構等概念。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問光纖主要是利用哪一種現象來傳導光線？'),
				'CHOICES: ["反射","繞射","全反射","干涉"]',
				'CHOICE_0',
					s(ev+'.fail("答錯囉！光纖主要是利用全反射來傳導光線")'),
				'CHOICE_1',
					s(ev+'.fail("答錯囉！光纖主要是利用全反射來傳導光線")'),
				'CHOICE_2',
					s(ev+'.take("答對了！")'),
				'CHOICE_3',
					s(ev+'.fail("答錯囉！光纖主要是利用全反射來傳導光線")'),
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
