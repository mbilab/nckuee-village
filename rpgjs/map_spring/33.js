var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 33, ev = 'game.ev['+map+']['+id+']', name = '軟體無線電導論與實作';
game.ev[map][id] = new game.Ev({

	hp_cost: function() { return 12; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('無線通訊已經是日常生活的重要一環，但訊號究竟是如何透過電波傳輸與接收？本課程包含無線射頻與基頻之相關技術介紹，透過簡單易學的圖形化程式設計軟體， 控制硬體運作，除了講解基礎理論，也利用精心設計的實驗帶領同學一步步建構無線通訊系統，以及實用有趣的期末專題，親身體會控制硬體運作與實現通訊原理的 成就感。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('接收訊號的方式有很多種，其中最廣為人知的便是天線，請問，下列配對何者正確？'),
				'CHOICES: ["紫色／丁丁","黃色／小波","綠色／拉拉","藍色／迪西"]',
				'CHOICE_0',
					s(ev+'.take("答對了～不過天線寶寶這種節目還是少看比較好")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了～想知道答案嘛？請搜尋天線寶寶")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了～想知道答案嘛？請搜尋天線寶寶")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了～想知道答案嘛？請搜尋天線寶寶")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
