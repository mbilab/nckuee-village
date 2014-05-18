var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 31, ev = 'game.ev['+map+']['+id+']', name = '計算機通訊';
game.ev[map][id] = new game.Ev({
	    hp_cost: function() { return 10; },
	    id: id,
	    map: map,
	    name: name,
}, [
    s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('計算機通訊這門課主要是在介紹無線網路的的各種協定。並透過如程式模擬error rate、網路無線共享、廣播效能模擬、Voip等實驗，讓同學們得以深入瞭解無線網路的相關知識。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問無線網路通用標準的名稱為？'),
				'CHOICES: ["IEEE 802.3","Unlimited Network","Wi-Fi","IEEE 802.11"]',
	 			'CHOICE_0',
					s(ev+'.fail("錯了，這個是乙太網路的標準")'),
				'CHOICE_1',
					s(ev+'.fail("錯了，這個是無限網路(誤...)")'),
				'CHOICE_2',
					s(ev+'.fail("錯了，Wi-Fi是一個建立於IEEE 802.11標準的無線區域網路設備")'),
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
