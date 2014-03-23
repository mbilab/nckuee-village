var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 37, ev = 'game.ev['+map+']['+id+']', name = '編譯系統';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 20; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('本課程是編譯器設計與實作之基礎課程，從本課程所學習到之理論與技術將可應用到許多資訊科技領域, 包括：編譯器、解譯器、除錯器的設計以及內嵌式系統發展環境建構、資料庫建構、矽編譯、 計算機相關之語言設計等。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('什麼是反編譯？'),
				'CHOICES: ["要程式不要執行編譯","編譯的逆過程","從程式的最後開始編"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了!")'),
				'CHOICE_1',
					s(ev+'.take("答對了!")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了!")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
	'CHOICE_1',
	'ENDCHOICES',
	'IF: "0 != variable[0]"',
		t('%V[0]'),
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
