var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 20, ev = 'game.ev['+map+']['+id+']', name = '機率與統計';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('機率的理論，主要會用在一些通訊模型的建立。而統計的概念，在處理抽樣數據以及檢測結果顯著性的應用上，佔有很重要的角色。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('如果一個人在A點投擲一枚硬幣，請問硬幣落在A點的機率是多少？'),
				'CHOICES: ["0.25","1","0","0.5"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了!")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了!")'),
				'CHOICE_2',
					s(ev+'.take("答對了!!")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了!")'),
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
