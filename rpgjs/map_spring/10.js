var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 10, ev = 'game.ev['+map+']['+id+']', name = '工程數學(二)';
game.ev[map][id] = new game.Ev({
	can_take: function() {
	 	if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
	    if ( !game.defined( game, 'ev', 1, 10, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[1][10].name+ '才可以選修本課！';
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
	t('經過上學期的介紹，這學期我們將更深入介紹傅立葉級數，在課程的後半段，我們將介紹工程數學在各領域的應用，像是波動方程式，熱方程式等等。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('傅立葉變換是一種線性的積分變換，常將信號在時域和頻域中轉換，在物理學和工程領域種有許多應用。試問關於傅立葉餘弦變換，下列何者錯誤'),
				'CHOICES: ["f(x)僅定義於大於零的區塊","偶函數","奇函數"]',
				'CHOICE_0',
					s(ev+'.fail()'),
				'CHOICE_1',
					s(ev+'.fail()'),
				'CHOICE_2',
					s(ev+'.take("答對了，恭喜您修過工程數學(二)")'),
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
