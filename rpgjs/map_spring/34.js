var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 34, ev = 'game.ev['+map+']['+id+']', name = '電源轉換器設計';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 18; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('本課程會教你關於電源轉換器的原理與如何設計，將來想進入電力組的同學，一定要修習本課程。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問ｔｒａｎｓｆｏｒｍｅｒ的中譯是什麼？'),
				'CHOICES: ["變形金剛","柯博文","變壓器"]',
				'CHOICE_0',
					s(ev+'.take("我不能說你錯...不過身為電力組的人，你應該要直覺翻譯成變壓器(也算通過")'),
				'CHOICE_1',
					s(ev+'.fail("翻成變形金剛我還可以接受，這個我就不能算你對了= =+")'),
				'CHOICE_2',
					s(ev+'.take("bingo")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
