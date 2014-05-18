var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 20, ev = 'game.ev['+map+']['+id+']', name = '作業系統';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 18; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('作業系統是硬體的靈魂所在！不僅能有效率地運用有限的硬體，亦能提供系統安全上的保護。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問下列並非何者是Deadlock的敘述呢？'),
				'CHOICES: ["Hold & Wait","circular-wait","preemptive","mutual exclusive"]',
				'CHOICE_0',
					s(ev+'.fail("喔喔 deadlock 的四要素為 mutual exclusive,non-preemptive,circular-wait,hold & wait 喔！")'),
				'CHOICE_1',
					s(ev+'.fail("喔喔 deadlock 的四要素為 mutual exclusive,non-preemptive,circular-wait,hold & wait 喔！")'),
				'CHOICE_2',
					s(ev+'.take("答對了！")'),
				'CHOICE_3',
					s(ev+'.fail("喔喔 deadlock 的四要素為 mutual exclusive,non-preemptive,circular-wait,hold & wait 喔！")'),
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
