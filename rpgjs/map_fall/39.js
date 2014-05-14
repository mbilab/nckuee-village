var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 39, ev = 'game.ev['+map+']['+id+']', name = '普通物理學實驗(一)';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('只有學理論的東西是不夠的，實作才可以讓你印象深刻。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('實驗做不做的好是一回事，更重要的是實驗過程中不要讓自己受傷。請問下列何者違反實驗室規定？'),
				'CHOICES: ["不得穿拖鞋進入實驗室。","為避免吃飯放費時間，可以邊吃飯邊做實驗。","勿使支架傾倒，以免發生任何可能性意外。","注意用電安全，避免電擊。"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！")'),
				'CHOICE_1',
					s(ev+'.take("邊吃飯邊做實驗是不對的喔～恭喜你答對")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
