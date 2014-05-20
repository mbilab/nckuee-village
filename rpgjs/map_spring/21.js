var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 21, ev = 'game.ev['+map+']['+id+']', name = '光電與半導體緒論';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 5; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('光電與半導體產業可以是說台灣眾多產業的部份，大致可區分為半導體材料(含化學品)、光罩、設計(含CAD軟體)、製程、封裝、測試及設備等七個技術領域。半導體產品包括積體電路、分離式元件和光電元件等三大類，廣泛應用於資訊、通訊、消費性電子、工業儀器。如果以後想要從事半導體產業的工作，那麼本課程是入門選擇！'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('半導體製程中，哪一個實驗步驟不會出現？'),
				'CHOICES: ["乾餾","清洗","雜質擴散","微影技術"]',
				'CHOICE_0',
					s(ev+'.take("答對了！")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！")'),
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
