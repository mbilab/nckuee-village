var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 45, ev = 'game.ev['+map+']['+id+']', name = '資料結構概論';
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
	t('有適合的資料結構的話，程式的演算法會比較簡潔。因此在寫任何程式之前，資料結構設計是相當重要的一環。本門課介紹一些基本的資料結構，如Stack、Queue、Link List、Tree、Hash、Heap、Graph等，並有補充一些如2-3 Tree、Red-Black Tree等進階的結構。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問下列哪一項「不是」Heap的應用：'),
				'CHOICES: ["排序(Sort) ","做Priority Queue","求出地圖上兩點最短路徑 "]',
	 			'CHOICE_0',
					s(ev+'.fail("錯了")'),
				'CHOICE_1',
					s(ev+'.fail("錯了")'),
				'CHOICE_2',
					s(ev+'.take("沒錯，這個是Graph的應用")'),
				'ENDCHOICES',
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
