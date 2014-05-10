var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 44, ev = 'game.ev['+map+']['+id+']', name = '資料結構緒論';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		if ( !game.defined( game, 'ev', 2, 4, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[2][4].name+ '才可以選修本課！';
		return RPGJS.Variables.data[0] = 1;
	},

	hp_cost: function() { return 8; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('資料結構主要是在研究如何把資料，組織、安排、存放到電腦中的一門學問。如果學好資料結構對於節省儲存空間、增加資料的安全性與處理速度將有很大幫助，對日後在軟、硬體發展上有彌足深遠的影響。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問下列何者是儲存資料的形式？'),
				'CHOICES: ["佇列（Ｑｕｅｕｅ）","堆疊（Ｓｔａｃｋ）","樹形（Ｔｒｅｅ）","以上皆是"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了＞＜！！堆疊跟樹形也都是儲存資料的一種形式喔～")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了＞＜！！序列跟樹形也都是儲存資料的一種形式喔～")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了＞＜！！序列跟堆疊也都是儲存資料的一種形式喔～")'),
				'CHOICE_3',
					s(ev+'.take("恭喜答對了！相信有了基本概念，對於以後的學習一定有幫助，加油！")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
