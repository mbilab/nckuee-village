var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 31, ev = 'game.ev['+map+']['+id+']', name = '社群網站設計';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 20; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('網路已經成為下一世代主流的平台，每個組織甚至每個人都在學習透過網路與世界接軌，熟悉相關的技術可以協助學生掌握趨勢，為未來做好準備。本課程為「網際網路程式設計」課程的進階版，由於課程的內容豐富，希望能夠用兩學期將內容完整消化，因此，本進階課程致力於提升網站的「專業性、互動性、多樣性」，雖然不要求先修「網際網路程式設計」，但沒有基礎的學生要多加考慮，期末是以一個專業的社群網站為目標，會是一門沉重的課程，但成果絕對值得。專業的團隊需要各方面的人才，本課程希望設計及程式的人數各佔一半，這會是成功的第一步。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('你是小組員，組長與設計的人員發生了爭執，僵持不下，請問你打算如何解決？'),
				'CHOICES: ["賞他們兩巴掌","沉默不語","提議投票表決","退選"]',
				'CHOICE_0',
					s(ev+'.fail("動手是不對的")'),
				'CHOICE_1',
					s(ev+'.fail("。。。。。。。。")'),
				'CHOICE_2',
					s(ev+'.take("成功解決僵局")'),
				'CHOICE_3',
					s(ev+'.fail("來日再修吧～")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
