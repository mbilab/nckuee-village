var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 42, ev = 'game.ev['+map+']['+id+']', name = '電機概論實驗';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		if ( !game.defined( game, 'ev', 2, 11, 'is_passed' ) ) RPGJS.Variables.data[0] ='要通過' + game.ev[2][11].name+'才可以選修本課！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('修完了電機概論，即使知道發電機與電動機如何運作，但是課本理論終究是有點抽象，不如親自見識親自操作一番！電機概論實驗聽到了你的聲音，就讓這堂課來帶你一窺發電機與電動機，以及變壓器的奧秘吧！！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('直流電動機依接線可分為若干種形式，下列何者為非?'),
			    'CHOICES: ["他激","交激","分激"]',
				'CHOICE_0',
					s(ev+'.fail()'),
				'CHOICE_1',
					s(ev+'.take("沒錯！並沒有這種形式！")'),
				'CHOICE_2',
					s(ev+'.fail()'),
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
