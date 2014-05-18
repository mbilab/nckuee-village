var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 38, ev = 'game.ev['+map+']['+id+']', name = '電力系統專論';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		if ( !game.defined( game, 'ev', 2, 27, 'is_passed' ) ) RPGJS.Variables.data[0] ='要通過' + game.ev[2][27].name+'才可以選修本課！';
		else RPGJS.Variables.data[0] = 1;
	},
	    hp_cost: function() { return 20; },
	    id: id,
	    map: map,
	    name: name,
}, [
    s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('電力系統是由發電、輸電、變電、 配電和用電等環節組成的電能生產與消費系統。 功能是將自然界的一次能源通過發電動力裝置轉化成電能，再經輸電、變電和配電將電能供應到各用戶。近來能源問題相當受到注目，相要踏進這個領域嗎？那麼此課程非修不可。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問電力系統的組成為何？'),
				'CHOICES: ["發電－＞配電－＞用電－＞輸電－＞變電","發電－＞輸電－＞變電－＞配電－＞用電","發電－＞輸電－＞ 配電－＞用電－＞變電","輸電－＞發電－＞變電－＞ 配電－＞用電"]', 
	 			'CHOICE_0',
					s(ev+'.fail("答錯！上課要認真聽！")'),
				'CHOICE_1',
					s(ev+'.take("答對！上課有認真聽講是對的！")'),
				'CHOICE_2',
					s(ev+'.fail("答錯！上課要認真聽！")'),
				'CHOICE_3',
					s(ev+'.fail("答錯！上課要認真聽！")'),
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
