var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 8, ev = 'game.ev['+map+']['+id+']', name = '電子學(二)';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		 if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		 if ( !game.defined( game, 'ev', 2, 8, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[2][8].name+ '才可以選修本課！';
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
	t('在電子學(二)中，我們會介紹更多電子學相關的元件，諸如各種放大器、頻率響應、電流鏡等等，你是否對電機系非常有興趣？你是否想要自己設計出一個電路？你是否好奇各個元件之間的組合和碰撞？教授正在課堂上等著你們！'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('放大器的一切基礎為運算放大器，又稱OP Amp，其中理想的OP Amp其A值趨近於無限大，所以導入放大器的電流為零。下列理想放大器之特性何者正確？'),
				'CHOICES: ["gain必大於零","不需要輸入電源就能運作","A值趨近無限大","gain=A"]',
				'CHOICE_0',
					s(ev+'.fail()'),
				'CHOICE_1',
					s(ev+'.fail()'),
				'CHOICE_2',
					s(ev+'.take("答對了，恭喜您修過電子(二)")'),
				'CHOICE_3',
					s(ev+'.fail()'),
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
