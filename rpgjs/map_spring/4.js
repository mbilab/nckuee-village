var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 4, ev = 'game.ev['+map+']['+id+']', name = '計算機概論（二）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
    	if ( !game.defined( game, 'ev', 1, 4, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[1][4].name+ '才可以選修本課！';
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
	t('電腦科學，不同以往國、高中的一般科目，此課程是你在大一課程中接觸到最靠近專業電機領域的科目。我們將會教你目前比較多人使用的兩種程式語言，Ｃ語言以及ＪＡＶＡ，第一次碰程式難免陌生，多加練習會有幫助的。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問\nint i, *p; i=5; p=&i; *p=1;\nprintf(" %d, %d ", *p, i );\n輸出是？'),
				'CHOICES: ["5, 1","1, 5","1, 1","5, 5"]',
				'CHOICE_0',
					s(ev+'.fail("殘念！ＰＯＩＮＴＥＲ的觀念不好！要再加強！")'),
				'CHOICE_1',
					s(ev+'.fail("殘念！ＰＯＩＮＴＥＲ的觀念不好！要再加強！")'),
				'CHOICE_2',
					s(ev+'.take("ＰＡＳＳ！恭喜恭喜！！")'),
				'CHOICE_3',
					s(ev+'.fail("殘念！ＰＯＩＮＴＥＲ的觀念不好！要再加強！")'),
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
