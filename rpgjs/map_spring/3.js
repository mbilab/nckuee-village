var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 3, ev = 'game.ev['+map+']['+id+']', name = '微積分（二）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
	 	if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
	    if ( !game.defined( game, 'ev', 1, 3, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[1][3].name+ '才可以選修本課！';
		return RPGJS.Variables.data[0] = 1;

	},
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('上學期學完微分，這學期的課程內容是積分，大家務必好好學習，不然以後修習工程數學會很苦喔～'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('三角函數的微積分是基本，來看看你有沒有學好吧？請問ｓｅｃ×ｔａｎ的積分是？'),
				'CHOICES: ["ｓｅｃ","ｔａｎ","ｃｓｃ"]',
				'CHOICE_0',
					s(ev+'.take("非常好！恭喜答對！有的良好的基礎，對你將來一定很有幫助。")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！請邁向偉大的重修之路")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！請邁向偉大的重修之路")'),
				'ENDCHOICES',
			"ENDIF",
		"ENDIF",	
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
