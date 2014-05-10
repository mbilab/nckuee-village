var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 7, ev = 'game.ev['+map+']['+id+']', name = '線性代數';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('線性中矩陣的運算是工程學和計算科學問題中的基本部分，這些問題包括圖像處理、信號處理、流體動力學等等，尤其在系統的處理分析上也是相當重要的一環。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問下列何者代表兩向量互相垂直的表現？'),
				'CHOICES: ["內積為０","外積為０","以上兩者皆需成立"]',
				'CHOICE_0',
					s(ev+'.fail("答錯囉！只好請你明年再來囉！")'),
				'CHOICE_1',
					s(ev+'.take("Ｂｉｎｇｏ！答對囉！恭喜你過關")'),
				'CHOICE_2',
					s(ev+'.fail("答錯囉！只好請你明年再來囉！")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
