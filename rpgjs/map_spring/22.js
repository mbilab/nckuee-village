var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 22, ev = 'game.ev['+map+']['+id+']', name = '微算機與介面設計';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 20; },

	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('微算機又稱微處理機，是將電腦之中央處理單元建構於單一積體電路晶片。微算機介面是將微算機與周邊裝置連接並運作之硬體與軟體組合。微算機與介面設計探討微處理機之架構與系統介面、基本輸入與輸出介面、介面程式設計等課題。本課程並配合該講授課程內容規劃模組化之實習單元，提供學生深入了解微處理機系統並藉由實機操作與程式設計演練強化學習效果。本課程規劃之內容包含微處理機系統架構與程式設計、基本微算機介面與輸入與輸出程式設計、實習模組硬體與軟體操作說明等與實習模組相關主題之講授。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('ＣＰＵ與記憶體之間的溝通橋樑稱之為匯流排，請問哪一種匯流排不存在？'),
				'CHOICES: ["位址匯流排","資料匯流排","控制匯流排","刪除匯流排"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！趕快去ｇｏｏｇｌｅ一下吧")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！趕快去ｇｏｏｇｌｅ一下吧")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！趕快去ｇｏｏｇｌｅ一下吧")'),
				'CHOICE_3',
					s(ev+'.take("答對了！的確是沒有這東西存在")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
