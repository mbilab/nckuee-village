var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 42, ev = 'game.ev['+map+']['+id+']', name = '生醫儀器導論';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
    t('聽過核磁共振嗎？你知道現在癌症除了化療還有一種叫做光子刀的療法嗎？本課程將電機知識結合醫學領域，目地為人類帶來更多的福祉。'),	
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('核磁共振現象來源於原子核的自旋角動量在外加磁場作用下的進動，不同類型的原子核自旋量子數也不同，請問質子數和中子數均為偶數的原子核，其自旋量子數為？'),
				'CHOICES: ["0","半整數","整數"]',
				'CHOICE_0',
					s(ev+'.take("答對了!")'),
				'CHOICE_1',
					s(ev+'.fail("哎呀~答錯了!答案是0唷!")'),
				'CHOICE_2',
					s(ev+'.fail("哎呀~答錯了!答案是0唷!")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
