var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 35, ev = 'game.ev['+map+']['+id+']', name = '普通物理學實驗(二)';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
	    if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
    t('經過上學期的洗禮，相信同學對於實驗室的規定有一定的了解了，相信這學期同學也能輕鬆學習輕鬆過關。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('昨天熬夜讀期中考，今日精神不濟...請問你會如何讓自己提振精神？'),
				'CHOICES: ["幹嘛提振精神，直接睡了！","白馬馬力夯（殺很大～～","用牙籤撐住眼皮","好同學ｃｏｖｅｒ一下"]',
				'CHOICE_0',
					s(ev+'.fail("助教大怒！被當掉了！")'),
				'CHOICE_1',
					s(ev+'.fail("說過了！實驗室不准吃東西！當掉！")'),
				'CHOICE_2',
					s(ev+'.fail("精神可嘉！不過太醜嚇到助教了，體力多扣５！",5)'),
				'CHOICE_3',
					s(ev+'.take("同學好罩！順利通過！")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
