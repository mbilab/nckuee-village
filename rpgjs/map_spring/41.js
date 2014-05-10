var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 41, ev = 'game.ev['+map+']['+id+']', name = '多媒體網際網路應用';
game.ev[map][id] = new game.Ev({

	hp_cost: function() { return 18; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('你知道為什麼網址前面大多都有www嗎？為什麼是三個？不是五個或七個？而http 代表的又是什麼呢？身為電機資訊人，這些還不知道就落伍了，還不趕緊來修課？'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('當你在瀏覽網頁時，伺服器無法正確回傳訊息，網頁會出現哪一個數字，代表伺服器發生錯誤？'),
				'CHOICES: ["４１５","０１０","１３８","４０４"]',
				'CHOICE_0',
					s(ev+'.fail("唉呀答案是４０４呦～同學要多留意身邊的訊息阿")'),
				'CHOICE_1',
					s(ev+'.fail("唉呀答案是４０４呦～同學要多留意身邊的訊息阿")'),
				'CHOICE_2',
					s(ev+'.fail("唉呀答案是４０４呦～同學要多留意身邊的訊息阿")'),
				'CHOICE_3',
					s(ev+'.take("答對了～！！")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
