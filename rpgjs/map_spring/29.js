var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 29, ev = 'game.ev['+map+']['+id+']', name = '線性系統';
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
	t('還記得之前修過的線性代數嗎？線性系統就是將之前所學應用到實務上，比起純理論要有趣多了，好課不修嗎？'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('若將一決定性系統視為黑箱系統，可以用一個將輸入映射到輸出的運算子來表示.......\n我們反黑箱！拒絕伏冒黑箱！\n＜＜學生發動罷課！響應香蕉學運，本課程停課無期限＞＞'),
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
