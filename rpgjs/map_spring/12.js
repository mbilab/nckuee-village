var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 12, ev = 'game.ev['+map+']['+id+']', name = '電磁學(二)';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		 if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		 if ( !game.defined( game, 'ev', 1, 14, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[1][14].name+ '才可以選修本課！';
		 return RPGJS.Variables.data[0] = 1;

	},
	hp_cost: function() { return 20; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('以為熬過了電磁(一)就可以海闊天空了嗎～？ＮｏＮｏＮｏ～～還有電磁(二)等著你呢！！ 電磁(二)教的是更深入的東西以及一些電磁的應用，如傳輸線原理、天線與輻射系統...等等，來吧！！這是你大學最後一堂必修主科了！！'),	
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('常被用來傳送橫向電磁波的波導設備有三種類型，你知道在鄉村地區常用的電話線是屬於哪一種嗎? '),	
				'CHOICES: ["平行板傳輸線","雙線式傳輸線","同軸傳輸線"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！！！")'),
				'CHOICE_1',
					s(ev+'.take("答對囉！！！恭喜你ＫＯ最後一堂主科必修！！")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！！！")'),
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
