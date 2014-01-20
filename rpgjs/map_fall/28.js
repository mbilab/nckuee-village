var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 28, ev = 'game.ev['+map+']['+id+']', name = '網際網路程式設計';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 18; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('從理論, 技術及實作三方面協助學生學習製作網際網路平台的能力,，想創造屬於自己的網路服務？想實現自己的創意嗎?本課程讓你學會開發一個網路平台，期末還有專業的展出活動，心動不如馬上行動！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問最新的網頁技術名稱為何？'),
				'CHOICES: ["HTML5／CSS6","HTML6／CSS5","HTML5／CSS3","HTML5／CSS5"]',
				'CHOICE_0',
					s(ev+'.fail("錯了！！HTML與CSS是寫網頁最基本的技術，後方的數字代表版本，但由於現在網頁技術的發展太快，現在已經決定無論以後技術如何改進，都不會把數字再加上去，現在的版本為HTML5與CSS3。")'),
				'CHOICE_1',
					s(ev+'.fail("錯了！！HTML與CSS是寫網頁最基本的技術，後方的數字代表版本，但由於現在網頁技術的發展太快，現在已經決定無論以後技術如何改進，都不會把數字再加上去，現在的版本為HTML5與CSS3。")'),
				'CHOICE_2',
					s(ev+'.take("Ｂｉｎｇｏ！")'),
				'CHOICE_3',
					s(ev+'.fail("錯了！！HTML與CSS是寫網頁最基本的技術，後方的數字代表版本，但由於現在網頁技術的發展太快，現在已經決定無論以後技術如何改進，都不會把數字再加上去，現在的版本為HTML5與CSS3。")'),
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
