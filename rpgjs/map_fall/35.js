var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 35, ev = 'game.ev['+map+']['+id+']', name = '通訊積體電路設計';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('本課程需要具備通訊的理論知識以及積體電路設計的能力才能夠順利得修課喔～如果你未曾修過類似的課程，請先去修習，再來選修吧！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('聽過數位和類比電路吧，你知道這兩種電路若是在同一晶片中，會有什麼樣的效果嗎??'),
				'CHOICES: ["提升彼此的效能","彼此不會相互作用","彼此會互相干擾"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！是會互相干擾！")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！是會互相干擾！")'),
				'CHOICE_2',
					s(ev+'.take("答對了！這堂課就在廣泛探討它們在同一晶片中的相互干擾原因及防治方法！")'),
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
