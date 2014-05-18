var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 10, ev = 'game.ev['+map+']['+id+']', name = '工程數學（一）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( !game.defined( game, 'ev', 2, 3, 'is_passed' ) ) RPGJS.Variables.data[0] ='要通過' + game.ev[2][3].name+'才可以選修本課！';
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
	t('工程數學是以微積分為基礎，在本學期，課程著重於二次微分方程、拉普拉斯方程式、傅立葉級數三大部分。或許平常生活中不會用到工程數學，但是要看懂專業的工程科系的工具書，不會工程數學是不行的喔！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('試求出L{t^2}=?'),
				'CHOICES: ["2/s^3","3/s^3","4/s^3","2/s^2"]',
				'CHOICE_0',
					s(ev+'.take("恭喜您成功修過工程數學(一)")'),
				'CHOICE_1',
					s(ev+'.fail("唉呀！答錯了")'),
				'CHOICE_2',	
					s(ev+'.fail("唉呀！答錯了")'),
				'CHOICE_3',
					s(ev+'.fail("唉呀！答錯了")'),
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
