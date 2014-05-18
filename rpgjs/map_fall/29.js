var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 29, ev = 'game.ev['+map+']['+id+']', name = '電力設備';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 5; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('你對電力是如何由一開始的發電到最後輸送到我們身邊成為110V/220V的電源過程有興趣嗎?這堂課會教你許多關於電力設備如變壓器等的相關知識!'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問由三繞組單相變壓器建構在於一單獨線圈上的是哪一種變壓器?'),
				'CHOICES: ["單相變壓器","三相變壓器","自耦變壓器"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了!")'),
				'CHOICE_1',
					s(ev+'.take("答對了!!")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了!")'),
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
