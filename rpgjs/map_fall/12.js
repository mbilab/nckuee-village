var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 12, ev = 'game.ev['+map+']['+id+']', name = '電子（三）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
	 	if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
	    if ( !game.defined( game, 'ev', 2, 8, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[2][8].name+ '才可以選修本課！';
		return RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 15; },//reture 代表體力扣的數值
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('恭喜你！終於來到電子學魔王的最後一關啦！！在電子學（三）這門課中，會把電子一二的課程作整合，讓你打通五臟六腑，課程內容中也會教導如何優化以前所學的系統，用更有效率且節省花費的方式來達到目的！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('一般而言，濾波器分成low-pass、high-pass、bandpass、bandstop四種，請問能使高於特定頻率之波形通過之濾波器為以上何種？'),
				'CHOICES: ["low-pass","high-pass","band-pass","band-stop"]',
				'CHOICE_0',
					s(ev+'.fail("正確答案是high-pass才對喔!!")'),
				'CHOICE_1',
					s(ev+'.take("答對了~~")'),
				'CHOICE_2',
					s(ev+'.fail("正確答案是high-pass才對喔!!")'),
				'CHOICE_3',
					s(ev+'.fail("正確答案是high-pass才對喔!!")'),
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
