var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 14, ev = 'game.ev['+map+']['+id+']', name = '量子物理學';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		 if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		 if ( !game.defined( game, 'ev', 1, 2, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[1][2].name+ '才可以選修本課！';
		 return RPGJS.Variables.data[0] = 1;						 
	},
	hp_cost: function() { return 12; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
    t('古典物理不能解釋的實驗，以平面波描述質點運動、波動方程式之物理意義，一些簡單物理體系及其能量算符與波函數的解，能量算符與其波函數集合的特性、算符方法、三度空間波動方程式。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('許多物理學理論和科學都是以量子物理學為基礎，下列何者為非？'),	
				'CHOICES: ["原子物理學","電路學","核物理學","粒子物理學"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！這是以量子物理學為基礎的唷～")'),
				'CHOICE_1',
					s(ev+'.take("答對了！")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！這是以量子物理學為基礎的唷～")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！這是以量子物理學為基礎的唷～")'),
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
