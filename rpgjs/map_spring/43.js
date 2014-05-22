var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 43, ev = 'game.ev['+map+']['+id+']', name = '邏輯系統';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
    t('你知道1+1其實不一定等於2嗎?'),	
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["遇到神經病了，快走..","怎麼說呢？"]',
 	'CHOICE_0',
	'CHOICE_1',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('世界上有10種人，看得懂二進位和看不懂二進位的請問你知道二進位的10101換成十進位是多少嗎?'),
				'CHOICES: ["21","6","32"]',
				'CHOICE_0',
					s(ev+'.take("答對了!")'),
				'CHOICE_1',
					s(ev+'.fail("看來你是看不懂的那種人，那只好請你再來聽一次課囉")'),
				'CHOICE_2',
					s(ev+'.fail("看來你是看不懂的那種人，那只好請你再來聽一次課囉")'),
				'ENDCHOICES',
			'ENDIF',
	'ENDCHOICES',
	"ENDIF",
	'IF: "0 != variable[0]"',
		t('%V[0]'),
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
