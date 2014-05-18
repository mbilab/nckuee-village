var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 9, ev = 'game.ev['+map+']['+id+']', name = '電路（一）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		if ( !game.defined( game, 'ev', 2, 2, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[2][2].name+ '才可以選修本課！';
		return RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('電路學的基礎是以克希荷夫定律為基礎，探討電子元件（電阻、電容、電感等）之電壓與電流的關係，本學期所教的電路以使用直流電為主，而交流電部分將留到下學期。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('克希荷夫定律分為克希荷夫電流定律與克希荷夫電壓定律，克希荷夫電流定律指的是「所有進入某節點的電流總和等於所以離開此節點的電流總和」，而克希荷夫電壓定律指的是「沿著閉合迴路所有元件兩端的電壓總和為零」，以上兩條定律乃電路學的兩大精隨，汝必謹記。'),
				//v0('＜玩家＞是的，吾必當謹記在心。'),
	s(ev+'.take()'),
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
