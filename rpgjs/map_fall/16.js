var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 16, ev = 'game.ev['+map+']['+id+']', name = '電工廠實習';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('漫漫黑夜嘆孤伶　鐘聲悠揚意難禁\n自古紅顏多厄運　默默沉哀到三更\n黃花飄落似有意　綠水東流卻無情\n誰家男兒願留我　遠離脂粉冷淒淒\n且把灰塵消除盡　白日永久放光明'),
	t('＜玩家＞奇怪…這不是實習課嗎，難道我走錯教室了？'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				s(ev+'.take()'),
			'ENDIF',
		"ENDIF",
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
