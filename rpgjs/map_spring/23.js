var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 23, ev = 'game.ev['+map+']['+id+']', name = '半導體物理';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('電子技術造就了我們目前資訊電腦產業的發展，更改變了我們日常生活形態，甚至人類的思考模式、文化活動以及國家間之政治與軍事的互動。電子技術中的主角就是半導體。本課程將由半導體材料的種類及特性開始介紹，並就他的重要導電行為加以討論。課程中會介紹最基本的半導體元件---二極體。對於二極體有了初步瞭解後，三極體的特性就很容易能夠掌握。除了基本元件的原理描述外，對於一些特殊功能的元件，例如發光二極體、二極體雷射、高頻電晶體等，均將略加介紹。最後我們將就積體電路技術的內容及發展做簡短的描述，並探討他們在現代人類生活中扮演的角色。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問二極體與三極體的差別敘述，何者正確？'),
				'CHOICES: ["二極體有兩隻腳，三極體有三隻腳","二極體有三個端子，三極體有兩個端子","二極體有兩個半導體區，三極體有四個","二極體的電流可以雙向流動，三極體可以有六種不同的流動方式"]',
				'CHOICE_0',
					s(ev+'.take("答對了！這是最簡單的區別方式喔")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！趕快去ｇｏｏｇｌｅ一下吧")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！趕快去ｇｏｏｇｌｅ一下吧")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！趕快去ｇｏｏｇｌｅ一下吧")'),
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
