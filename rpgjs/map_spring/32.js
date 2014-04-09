var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 32, ev = 'game.ev['+map+']['+id+']', name = '計算機演算法';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('演算法指的是能將一個問題用紙與筆，及有限步驟即可解決的方法，可以替解決問題提供一個快速的步驟。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問，下列何者關於演算法分析的敘述是對的呢？'),
				'CHOICES: ["f(x) = O(g(x)) 是指必然存在某兩數c , n ，使得對所有 x >= n ，則 f(x) >= c*g(x)","f(x) = o(g(x)) 是指必然存在某兩數c , n ，使得對所有 x >= n ，則 f(x) >= c*g(x)","若f(x) = x^2 + 3x + 1 ，則f(x) = O(x)","若f(x) = x^4 + 1  ， 則f(x) = o(x^2) "]',
				'CHOICE_0',
					s(ev+'.take("恭喜你答對了！")'),
				'CHOICE_1',
					s(ev+'.fail("喔喔，要不要再看清楚呢？")'),
				'CHOICE_2',
					s(ev+'.fail("喔喔，要不要再看清楚呢？")'),
				'CHOICE_3',
					s(ev+'.fail("喔喔，要不要再看清楚呢？")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
