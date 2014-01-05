var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 6, ev = 'game.ev['+map+']['+id+']', name = '大一英文(一)';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 'undefined' === typeof game.eng_14_15 ? 8 : 0; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	s(ev+'.is_took()'),
	'IF: "0 == variable[0]"',
		t('請問你的學測英文是幾級分？'),
		'CHOICES: ["14-15 級分","14 級分以下","我還不想修這門課"]',
		'CHOICE_0',
			s('game.eng_14_15 = 1'),
			s(ev+'.take()'),
			t('%V[0]'),
		'CHOICE_1',
			s(ev+'.take()'),
			t('%V[0]'),
		'CHOICE_2',
		'ENDCHOICES',
	"ELSE",
		t('%V[0]'),
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
