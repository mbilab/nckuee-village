var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 36, ev = 'game.ev['+map+']['+id+']', name = '邏輯系統實習';
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
	t('邏輯系統設計教了許多理論，來實際操作一下吧～'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('１ａｎｄ１／１ｏｒ０　請問答案是？'),
				'CHOICES: ["１／０","０／１","１／１","０／０"]',
				'CHOICE_0',
					s(ev+'.fail("是１／１才對，答錯囉")'),
				'CHOICE_1',
					s(ev+'.fail("是１／１才對，答錯囉")'),
				'CHOICE_2',
					s(ev+'.take("答對囉")'),
				'CHOICE_3',
					s(ev+'.fail("是１／１才對，答錯囉")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
