var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 33, ev = 'game.ev['+map+']['+id+']', name = '半導體元件';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('本堂課會介紹你各種半導體元件的特性。半導體的導電性介於良導電體與絕緣體之間，半導體材料通常是矽、鍺、或砷化鎵，並經過各式特定的滲雜，產生P型或N型半導體，可作成整流器、振盪器、發光器、放大器、測光器等元件或設備。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('下列關於整流的敘述，何者錯誤?'),
				'CHOICES: ["將交流電轉換成直流電的裝置","是電源供應器的一部分","可能是氣態二極體","氧化銅是可能的原料"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！這是正確的敘述喔～")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！這是正確的敘述喔～")'),
				'CHOICE_2',
					s(ev+'.take("答對了～二極體哪來的氣態呢")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！這是正確的敘述喔～")'),
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
