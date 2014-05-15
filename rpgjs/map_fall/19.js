var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 19, ev = 'game.ev['+map+']['+id+']', name = '離散數學';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('離散數學是電腦科學的數學基礎！從基礎的數論、關係及排列組合，一直到圖論、眼算法分析都需要離散數學的幫忙喔！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
	s(ev+'.is_took()'),
	'IF: "0 == variable[0]"',
	s(ev+'.can_take()'),
	'IF: "1 == variable[0]"',
	t('請問，若給定一個圖G=(V,E)，何謂Eular Circuit 呢？'),
	'CHOICES: ["經過Ｇ中每一個邊恰一次的迴圈","經過Ｇ中每一個點恰一次的迴圈","是Ｇ中的一條路徑，且其兩端點無法再延伸","是指Ｇ是一個完全連通的圖形"]',
	'CHOICE_0',
	s(ev+'.take("恭喜你答對了！關於Ｅ.Ｃ常見的問題就是歐拉的妻橋問題喔！")'),
	'CHOICE_1',
	s(ev+'.fail("喔喔，這是Hamilton Circuit 的定義喔")'),
	'CHOICE_2',
	s(ev+'.fail("喔喔，這是maximal path 的定義喔")'),
	'CHOICE_3',
	s(ev+'.fail("喔喔，這是complete graph的定義喔")'),
	'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
