var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 43, ev = 'game.ev['+map+']['+id+']', name = '再生能源轉換器實驗';
game.ev[map][id] = new game.Ev({
		
	    hp_cost: function() { return 10; },
	    id: id,
	    map: map,
	    name: name,
}, [
    s(ev+'.stop()'),
	t('本課程是風力發電為基本的各種的實驗，對風力發電有興趣的同學，不修嗎?'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('風力發電的優缺點對照下列何者錯誤？'),
				'CHOICES: ["沒有燃料問題／會產生輻射與二氧化碳","取之不盡，用之不竭／能量無法集中","建造費用低廉／噪音"]',
	 			'CHOICE_0',
					s(ev+'.take("風力發電不會有輻射與二氧化碳污染喔～答錯了，這就是我們要的錯誤答案~")'),
				'CHOICE_1',
					s(ev+'.fail("答對了！但是要選錯誤的喔~")'),
				'CHOICE_2',
					s(ev+'.fail("答對了！但是要選錯誤的喔~")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
