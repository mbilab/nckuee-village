var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 2, ev = 'game.ev['+map+']['+id+']', name = '普通物理學（二）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( !game.defined( game, 'ev', 1, 2, 'is_passed' ) ) RPGJS.Variables.data[0] ='要通過' + game.ev[1][2].name+'才可以選修本課！';
		else if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('下學期的課程中會介紹電與磁的關係，同學們務必好好學習，為將來的電磁學做好準備！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
	s(ev+'.is_took()'),
	'IF: "0 == variable[0]"',
	s(ev+'.can_take()'),
	'IF: "1 == variable[0]"',
	t('請問關於冷次定律的說明何者錯誤？'),
	'CHOICES: ["冷次定律是由俄國物理學家海因里希．冷次在1834年發現的。","由於磁通量的改變而產生的感應電流會抵抗磁通量的改變。","由於磁通量的改變而產生的感應電流會加強磁通量的改變。"]',
	'CHOICE_0',
	s(ev+'.fail("另外兩個選項很明顯就是相反的，想必答案一定是其中之一，你竟然選我，那只好說活該被當掉嚕～")'),
	'CHOICE_1',
	s(ev+'.take()'),
	'CHOICE_2',
	s(ev+'.fail("觀念完全錯誤！來年重修再來一次！")'),
	'ENDCHOICES',
	'ENDIF',
	'ENDIF',
	t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
