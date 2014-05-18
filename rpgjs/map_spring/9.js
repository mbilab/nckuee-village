var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 9, ev = 'game.ev['+map+']['+id+']', name = '電路學(二)';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		 if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		 if ( !game.defined( game, 'ev', 2, 9, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[2][9].name+ '才可以選修本課！';
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
	t('在上學期我們主要集中在討論直流電源電路，在這學期中我們在著力於交流電源方面，想知道如何在更複雜的電路上使用戴維寧定律嗎？好奇發電機的電路概念是什麼嗎？那你一定不能錯過這堂課！'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('發電機的運轉要有繞組的存在，但是為了保證發電機穩定的運作，至少要具有三個繞組，理論上發電機的相數可以更高，但為什麼大部分國家都只使用三相發電機來發電呢?'),
				'CHOICES: ["三是一個比較吉利的數字","剛好是x,y,z三個相位","三個繞組是最經濟的組合"]',
				'CHOICE_0',
					s(ev+'.fail("當掉了!")'),
				'CHOICE_1',
					s(ev+'.fail("當掉")'),
				'CHOICE_2',
					s(ev+'.take("答對了，恭喜您修過電路學(二)")'),
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
