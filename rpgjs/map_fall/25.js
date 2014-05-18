var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 25, ev = 'game.ev['+map+']['+id+']', name = '平面顯示器概論';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 5; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('你知道液晶是什麼嗎？你知道螢幕是怎麼成像的嗎？這就是我們這門課即將教你的，互動式投影機、電子白板等等都是本課程的範疇，想要一窺顯示器的究竟嗎？還猶豫什麼？快來上課吧！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('下列配對何者正確？'),
				'CHOICES: ["液晶電視／電漿電視 自發光／背燈管發光","液晶電視／電漿電視 低輻射／零輻射","液晶電視／電漿電視 低輻射／低輻射","液晶電視／電漿電視 背燈管發光／自發光"]',
				'CHOICE_0',
					s(ev+'.fail("不對喔！正確答案為「液晶電視／電漿電視 零輻射／低輻射 背燈管發光／自發光」")'),
				'CHOICE_1',
					s(ev+'.fail("不對喔！正確答案為「液晶電視／電漿電視 零輻射／低輻射 背燈管發光／自發光」")'),
				'CHOICE_2',
					s(ev+'.fail("不對喔！正確答案為「液晶電視／電漿電視 零輻射／低輻射 背燈管發光／自發光」")'),
				'CHOICE_3',
					s(ev+'.take("答對了！")'),
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
