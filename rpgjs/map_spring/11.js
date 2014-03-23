var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
ss)，請問下列何者不是應該出現的損失？
var map = 2, id = 11, ev = 'game.ev['+map+']['+id+']', name = '電機概論';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( !game.defined( game, 'ev', 2, 2, 'took' ) ) RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][2].name+' ！';
		else if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('在炎炎的夏日中，電風扇的扇片不斷地轉動，令人不經好奇那嗡嗡嗡的聲音來自何方？又是什麼樣的力量轉動葉片帶來陣陣涼風呢？踏入電機概論的世界，讓教授為你掀開馬達的神祕面紗。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('感應電動機中有許多損失(loss)，請問下列何者不是應該出現的損失？'),
				'CHOICES: ["轉子銅損","鐵心損失","摩擦與風損","塑膠片損失"]',
				'CHOICE_0',
					s(ev+'.fail()'),
				'CHOICE_1',
					s(ev+'.fail()'),
				'CHOICE_2',
					s(ev+'.fail()'),
				'CHOICE_3',
					s(ev+'.take("答對了，恭喜您修過電機概論")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
