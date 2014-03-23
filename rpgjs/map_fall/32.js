var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 32, ev = 'game.ev['+map+']['+id+']', name = '電力電子學';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('電力電子學是應用於電力領域，使用電力電子元件對電能進行變換和控制的電子技術。可以分為電力電子元件製造技術和變流技術。電力電子學是由電力學、電子學和控制理論三個學科交叉而成。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('下列關於ＡＣ－ＤＣ轉換的敘述，何者正確?'),
				'CHOICES: ["又可稱為整流電路","又稱為斬波電路","又稱為逆變電路"]',
				'CHOICE_0',
					s(ev+'.take("答對囉～～")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！正確答案是整流電路，斬波電路是ＤＣ－ＤＣ")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！正確答案是整流電路，斬波電路是ＤＣ－ＡＣ")'),
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
