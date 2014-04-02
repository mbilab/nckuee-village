var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 34, ev = 'game.ev['+map+']['+id+']', name = 'ULSI工程';
game.ev[map][id] = new game.Ev({

	    can_take: function() {
					if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
					else RPGJS.Variables.data[0] = 1;
									    },
		
	    hp_cost: function() { return 10; },
	    id: id,
	    map: map,
	    name: name,
}, [
    s(ev+'.stop()'),
	t('超大型積體電路是一種將大量電晶體組合到單一晶片的積體電路。 集成的電晶體數在不同的標準中有所不同。電腦裡的控制核心微處理器就是超大型積體電路的最典型實例。無論你將來想要走哪一組，本課程都會是相當重要的基礎。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問下列哪一個可能會是本課程會用到的實作程式？"),
				'CHOICES: ["verilog","angry bird","photoshop"]',
	 			'CHOICE_0',
					s(ev+'.take("答對了～")'),
				'CHOICE_1',
					s(ev+'.fail("同學上課不要打電動喔！")'),
				'CHOICE_2',
					s(ev+'.fail("可惜答錯了~")'),
				'ENDCHOICES',
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
