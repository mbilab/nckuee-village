var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 8, ev = 'game.ev['+map+']['+id+']', name = '電子（一）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( game.defined( game, 'ev', 2, 1, 'took' ) ) return true;
//		RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][1].name+' ！';
		RPGJS.Variables.data[0] = '需要先修 普通物理學（二） ！';
		return false;
	},
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('在此課程中，會介紹你電子元件的特性及應用，像ＢＪＴ、ＣＭＯＳ…以及使用這些元件兜成的基本電路跟電路特性。目前最常被使用的原件是ＣＭＯＳ，但在高頻的情形下，ＢＪＴ能具有它的優勢。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問如果設計的電路是高頻電路，那麼該選用下列哪一個電子元件？'),
				'CHOICES: ["ＣＭＯＳ","ＢＪＴ"]',
				'CHOICE_0',
					s(ev+'.fail("不對喔")'),
				'CHOICE_1',
					s(ev+'.take()'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
