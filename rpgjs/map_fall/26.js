var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 26, ev = 'game.ev['+map+']['+id+']', name = '類比通訊';
game.ev[map][id] = new game.Ev({

	    can_take: function() {
					if ( !game.defined( game, 'ev', 2, 17, 'took' ) ) RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][17].name+' ！';
					else if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
					else RPGJS.Variables.data[0] = 1;
									    },
		
	    hp_cost: function() { return 15; },
	    id: id,
	    map: map,
	    name: name,
}, [
    s(ev+'.stop()'),
	t('類比通信是指利用類比信號來做信息傳遞的一種通信方式，像是現行的電話、傳真、廣播、電視等等都是屬於類比通信系統，此系統具有較佳的傳真效果。 雖然類比通訊漸漸被數位通訊取代，但是有許多觀念都以類比通信為基礎，所以還是需要好好學習類比通訊的知識。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('下列敘述何者錯誤？'),
				'CHOICES: ["頻率的定義為弦波在一秒內所變化的次數","週期之單位為赫芝－Hz，頻率之單位為秒－Sec","通信型態可分為類比通信與數位通信","電話聽到的聲音是類比信號"]',
	 			'CHOICE_0',
					s(ev+'.fail("答錯了！老師已經大放水了，還錯就只好乖乖重修了")'),
				'CHOICE_1',
					s(ev+'.take("答對了！")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！老師已經大放水了，還錯就只好乖乖重修了")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！老師已經大放水了，還錯就只好乖乖重修了")'),
				'ENDCHOICES',
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
