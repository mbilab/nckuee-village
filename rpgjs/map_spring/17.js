var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 17, ev = 'game.ev['+map+']['+id+']', name = '訊號與系統';
var x = 15, y = 3;
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 12; },
	id: id,
	map: map,
	name: name,
	x:x,
	y:y,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('訊號與系統這門課，主要以數學的方式表示各種訊號以及系統，透過如Fourier transform, z transform, convolution sum等演算法，來解析各種訊號，並理解一個系統其輸出、輸入的關係。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('傳說中瞭解一個系統的其中一種方式，可以輸入一種別稱叫做「一陽指」的訊號，就可以透過其響應(Response)來瞭解系統的特性。並可由此輸出推得其他訊號的響應。(註：限LTI系統)。請問這種訊號的響應稱為？(提示：能量集中於一點)'),
				'CHOICES: ["我不知道金庸什麼的..","Unit Impulse Response(單位脈衝響應)","六脈神劍","Unit Step Response(單位步階響應)"]',
				'CHOICE_0',	
					s(ev+'.fail("答錯了！答案是b喔！")'),
				'CHOICE_1',
					s(ev+'.take("答對了！")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！答案是b喔！同學你金庸看太多了喔！")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！答案是b喔！")'),
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
