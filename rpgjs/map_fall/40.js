var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 40, ev = 'game.ev['+map+']['+id+']', name = '電儀表學實驗';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 5; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('也許你已經用過了電機系學生常用的示波器、訊號產生器等儀器，但是你知道這些儀器也可以在軟體上模擬嗎?你知道其實程式不一定是一團程式碼，也可以用圖控的方式去呈現嗎? 你想看自己的生理訊號透過儀器顯示在電腦上嗎? 電儀表學實驗將會帶你操作這些新奇有趣的儀器與軟體！也許你已經用過了電機系學生常用的示波器、訊號產生器等儀器，但是你知道這些儀器也可以在軟體上模擬嗎?你知道其實程式不一定是一團程式碼，也可以用圖控的方式去呈現嗎? 你想看自己的生理訊號透過儀器顯示在電腦上嗎? 電儀表學實驗將會帶你操作這些新奇有趣的儀器與軟體！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問:下列何者為圖控語言軟體?'),
				'CHOICES: ["MultiSIM","LabVIEW","NI_ELVIS_II"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！這是一套功能強大的模擬設計軟體。")'),
				'CHOICE_1',
					s(ev+'.take("答對了!")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！這是一款模組化工程教學實驗平台。")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
