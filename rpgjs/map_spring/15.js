var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 15, ev = 'game.ev['+map+']['+id+']', name = '數位電子學';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( !game.defined( game, 'ev', 2, 2, 'took' ) ) RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][2].name+' ！';
		else if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 12; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('數位元件設計簡介，ＭＯＳ與ＢＪＴ原理、製程與電路設計，各種不同技術的正反器，複製器與樞密特電路，半導體記憶器，標準電路元，閘陣列與其他可規劃邏輯元件與其他新技術介紹。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('關於正反器的敘述何者錯誤？'),
				'CHOICES: ["英文為ｆｌｉｐ－ｆｌｏｐ","學名單穩態多諧振盪器","具有記憶功能的循序邏輯元件","不只有一種"]',
				'CHOICE_0',
					s(ev+'.fail("本選項是對的呦～答錯了ＱＱ")'),
				'CHOICE_1',
					s(ev+'.take("答對了！是雙穩態多諧振盪器才對")'),
				'CHOICE_2',
					s(ev+'.fail("本選項是對的呦～答錯了ＱＱ")'),
				'CHOICE_3',
					s(ev+'.fail("本選項是對的呦～答錯了ＱＱ")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
