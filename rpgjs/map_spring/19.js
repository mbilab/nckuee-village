var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 19, ev = 'game.ev['+map+']['+id+']', name = 'VLSI系統設計';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('超大型積體電路是一種將大量電晶體組合到單一晶片的積體電路。 集成的電晶體數在不同的標準中有所不同。電腦裡的控制核心微處理器就是超大型積體電路的最典型實例。無論你將來想要走哪一組，本課程都會是相當重要的基礎。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問下列哪一個可能會是本課程會用到的實作程式？'),
				'CHOICES: ["ｖｅｒｉｌｏｇ","ａｎｇｒｙ　ｂｉｒｄ","ｐｈｏｔｏｓｈｏｐ"]',
				'CHOICE_0',
					s(ev+'.take("答對了～")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了～真可惜")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了～真可惜")'),
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
