var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 38, ev = 'game.ev['+map+']['+id+']', name = '控制工程實驗';
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
    t('本課程會使用樂高實作，同學們要自己組裝機器人，並且寫機器人的程式，讓機器人可以自行走出迷宮，覺得有趣嗎？快來修課！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問以下哪一個ｓｅｎｓｏｒ不存在？'),
				'CHOICES: ["ｌｉｇｈｔ　ｓｅｎｓｏｒ","ｔｏｕｃｈ　ｓｅｎｓｏｒ","ｓｏｕｎｄ　ｓｅｎｓｏｒ","都存在"]',
				'CHOICE_0',
					s(ev+'.take("其實都存在喔～同學可以多加運用")'),
				'CHOICE_1',
					s(ev+'.take("其實都存在喔～同學可以多加運用")'),
				'CHOICE_2',
					s(ev+'.take("其實都存在喔～同學可以多加運用")'),
				'CHOICE_3',
					s(ev+'.take("其實都存在喔～同學可以多加運用")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
