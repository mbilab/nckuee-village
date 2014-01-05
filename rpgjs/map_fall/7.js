var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 7, ev = 'game.ev['+map+']['+id+']', name = '大一體育';
game.ev[map][id] = new game.Ev({
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	s(ev+'.is_took()'),
	'IF: "0 == variable[0]"',
		t('多動多健康，你想要修習怎麼樣的課呢？'),
		'CHOICES: ["籃球","排球","游泳","韻律","水中有氧","國標舞","我再考慮一下"]',
		'CHOICE_0', s(ev+'.take("",12)'),
		'CHOICE_1', s(ev+'.take("",10)'),
		'CHOICE_2', s(ev+'.take("",15)'),
		'CHOICE_3', s(ev+'.take("",5)'),
		'CHOICE_4', s(ev+'.take("",10)'),
		'CHOICE_5', s(ev+'.take("",10)'),
		'CHOICE_6', v0(0),
		'ENDCHOICES',
	"ENDIF",
	'IF: "0 != variable[0]"',
		t('%V[0]'),
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
