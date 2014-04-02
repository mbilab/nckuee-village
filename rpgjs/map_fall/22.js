var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 22, ev = 'game.ev['+map+']['+id+']', name = '工程數學(三)';
game.ev[map][id] = new game.Ev({

	    can_take: function() {
					if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
					else RPGJS.Variables.data[0] = 1;
									    },
		
	    hp_cost: function() { return 15; },
	    id: id,
	    map: map,
	    name: name,
}, [
    s(ev+'.stop()'),
	t('雖然本課程並不在必修課程範圍內，但是如果想要進入通訊組或是通信組，那麼強力推薦你要選修本課程，本課程會延續工程數學（二）的內容，並介紹你實際的應用。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('下列何者不是傅立葉變換在影像處理領域的應用？'),
				'CHOICES: ["影像分析","影像濾波","影像重建","以上皆是"]',
	 			'CHOICE_0',
					s(ev+'.fail("答錯了！其實傅立葉變換在影像處理中的應用相當多樣，同學要再多看多學喔～")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！其實傅立葉變換在影像處理中的應用相當多樣，同學要再多看多學喔～")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！其實傅立葉變換在影像處理中的應用相當多樣，同學要再多看多學喔～")'),
				'CHOICE_3',
					s(ev+'.take("答對了！")'),
				'ENDCHOICES',
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
