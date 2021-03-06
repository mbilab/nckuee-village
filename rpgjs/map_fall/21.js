var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 21, ev = 'game.ev['+map+']['+id+']', name = '材料科學導論';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		if ( !game.defined( game, 'ev', 2, 2, 'is_passed' ) ) RPGJS.Variables.data[0] ='要通過' + game.ev[2][2].name+'才可以選修本課！';
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
	t('材料科學導論這堂課會教你許多關於材料的知識，內容有點像高中化學教過的，但是更深入唷～～'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('塊狀金屬內包含許多原子，可能形成極多的分子軌域，而一群連續緊密的分子軌域稱為一個能帶。請問:最高填滿電子的能帶稱為什麼?'),
				'CHOICES: ["傳導帶","價帶","能隙"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了! 傳導帶為電子可以自由移動的能帶。")'),
				'CHOICE_1',
					s(ev+'.take("恭喜答對了!")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了! 能隙為價帶與傳導帶間之能量差。")'),
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
