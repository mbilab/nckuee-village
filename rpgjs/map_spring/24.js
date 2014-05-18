var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 24, ev = 'game.ev['+map+']['+id+']', name = 'VLSI電路設計';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 18; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('VLSI電路設計是由張順志老師所開設的大三選修課程，此課程對於欲進入CAD組的學生們十分重要，其中主要教導關於IC design的相關知識，並利用作業的機會來直行layout畫製。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問一般mos常用之三腳位分別為何?'),
				'CHOICES: ["head - hand - foot","roof - door -window","drain - gate - source","switch - input - output "]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！")'),
				'CHOICE_2',
					s(ev+'.take("答對了！")'),
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
