var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 41, ev = 'game.ev['+map+']['+id+']', name = '電子學實驗(一)';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('還記得大二時所學的電子學(一)(二)和電路學(一)(二)嘛？那書本上、考卷上、講義上的BJT.MOS.還有各種複雜的電路，是不是總覺得哪裡不踏實？嘿，電子學實驗(一)讓你開始踏進書本上的世界，由助教帶著你學習各種基本的電路元件，藉由兜出以前所學的電路，讓你更了解各種IC.二極體等等的運作方式！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('MOSFET中不包含下列何種腳位？'),
				'CHOICES: ["Drain","Source","Emitter","Gate"]',
				'CHOICE_0',
					s(ev+'.fail()'),
				'CHOICE_1',
					s(ev+'.fail()'),
				'CHOICE_2',
					s(ev+'.take("答對了，這是BJT的腳位")'),
				'CHOICE_3',
					s(ev+'.fail()'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
