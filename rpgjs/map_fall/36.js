var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 36, ev = 'game.ev['+map+']['+id+']', name = '醫療系統晶片導論';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('本課程是本系中相當新的一門課，介紹現有的生醫電子產品，並引導你將電機知識應用到生醫領域，期望同學能夠創新，思考出對醫療方面有貢獻的產品，製做產品企劃書，推銷自己的產品。想要創業嗎?對生醫領域有興趣嗎?歡迎選修本課程。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('下列何者「不是」穿戴式(或可攜式)醫療儀器，其系統晶片所致力的目標？'),
				'CHOICES: ["低功號(Low-power consumption)","低解析度(Low resolution)","無線傳輸(Wireless transmission)"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了，低功耗將有助於長期的使用。")'),
				'CHOICE_1',
					s(ev+'.take("恭喜你答對了！訊號處理上，高解析度才能有助於我們得到更精準的診斷資料。")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了，隨著藍芽、Wi-Fi、ZigBee等的普及，無線傳輸可提供資料傳輸的便利性，資料的傳輸可以蒐集更多的資料，有助醫生的判讀。")'),
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
