var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 25, ev = 'game.ev['+map+']['+id+']', name = '數位通訊';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 12; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('數位通訊就像是你把紅豆麵包(類比訊號假想物)壓扁,然後切成好幾千塊,並把紅豆和麵包分開,當作1,0。然後你小心地排整齊後，再把它柔在一起，竟然變 成一模一樣的紅豆麵包((不過有一點點沒柔進去(那可能叫做人為的失誤,也可稱為失真)。當然中間的過程怎樣保持紅豆或麵包沒有掉到地上，以及要不要加入 一點糖或是其他東西，就看你如何斟酌阿XD'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('QPSK 是什麼?'),
				'CHOICES: ["一種吃的,像是雷神巧克力之類的","我猜是人名是吧","調變技術的一種"]',
				'CHOICE_0',
					s(ev+'.fail("同學你可能肚子餓了")'),
				'CHOICE_1',
					s(ev+'.fail("不對吧,哪有人名那麼奇怪")'),
				'CHOICE_2',
					s(ev+'.take("答對了,看來你很喜歡吃紅豆麵包吧")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
