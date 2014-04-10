var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 37, ev = 'game.ev['+map+']['+id+']', name = '電路學實驗';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('電路學上了那麼多東西，是不是等不及想親手試一試了呢? 這堂實驗課將會開啟你身為電機系學生無止盡的接線人生，小心唷！這堂課將會使用到最高２２０Ｖ的電壓，請在修課時千萬小心自身安全！！'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問量測電路某處功率的儀器為?'),
				'CHOICES: ["伏特計","瓦特計","伏特加","安培計","威士忌"]',
				'CHOICE_0',
					s(ev+'.fail("這是量測電壓的儀器!")'),
				'CHOICE_1',
					s(ev+'.take("恭喜您答對了!")'),
				'CHOICE_2',
					s(ev+'.fail("酗酒是不好的行為!")'),
				'CHOICE_3',
					s(ev+'.fail("這是量測電流的儀器!")'),
				'CHOICE_4',
					s(ev+'.fail("酗酒是不好的行為!")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4