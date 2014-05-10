var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 39, ev = 'game.ev['+map+']['+id+']', name = '電子學實驗(二)';
game.ev[map][id] = new game.Ev({

	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('還記得曾經學過的電子儀表，倒相放大電路與同相放大電路，加減法電路，積分器、微分器、比較器、史密斯觸發電路、整流電路及絕對值電路等等嗎？本實驗會帶你體驗各種電路的實際應用，你將會有更深一層的了解。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問長方形的ＩＣ接腳的編號順序是順時針還是逆時針？'),
				'CHOICES: ["順時針","逆時針"]',
				'CHOICE_0',
					s(ev+'.take("答對囉")'),
				'CHOICE_1',
					s(ev+'.fail("二選一還錯，只好重修了（奸笑")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
