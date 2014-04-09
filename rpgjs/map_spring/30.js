var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 30, ev = 'game.ev['+map+']['+id+']', name = '太陽能光代電子系統理論與應用';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 18; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('本課程旨於培養學生太陽能光伏電子系統理論設計與實作之專業技能，課程中依據太陽能光伏發電之種類及特性規劃系統參數、電路拓墣與控制策略，並透過電腦輔助軟體、實際電路製作與特性量測環境，奠定學生整合跨領域基礎理論與應用技術之實基。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('下列何者是太陽能源的缺點？'),
				'CHOICES: ["有輻射汙染","需要大面積的接收面板","有一天會用盡","太刺眼"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！又不是核能")'),
				'CHOICE_1',
					s(ev+'.take("答對了！")'),
				'CHOICE_2',
					s(ev+'.fail("目前看起來除非地球毀滅，不然應該是不會用盡，答錯！")'),
				'CHOICE_3',
					s(ev+'.fail("又不是要你用眼睛接收，何來刺眼？！答錯！")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
