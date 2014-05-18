var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 16, ev = 'game.ev['+map+']['+id+']', name = '超大型積體電路電腦輔助設計概論';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 20; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('超大型積體電路大量電晶體組合到單一晶片的積體電路。 電腦裡的控制核心微處理器就是超大型積體電路的最典型實例。本課程是ＵＬＳＩ與ＶＬＳＩ的基礎課程，如果你以後想要選修ＵＬＳＩ或ＶＬＳＩ，那麼先修本課程必會使你事半功倍！'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問修完本課程為哪些課程的基礎'),
				'CHOICES: ["ＵＬＳＩ／ＰＬＳＩ","ＰＬＳＩ／ＶＬＳＩ","ＵＬＳＩ／ＶＬＳＩ"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！上課都沒再聽，重修吧你")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！上課都沒再聽，重修吧你")'),
				'CHOICE_2',
					s(ev+'.take("答對了～超簡單的吧")'),
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
