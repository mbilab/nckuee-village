var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 12, ev = 'game.ev['+map+']['+id+']', name = '電子（三）';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		if ( game.defined( game, 'ev', 2, 1, 'took' ) ) return true;
//		RPGJS.Variables.data[0] = '需要先修 '+game.ev[2][1].name+' ！';
		RPGJS.Variables.data[0] = '需要先修 電子（二） ！';
		return false;
	},
	hp_cost: function() { return 18; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('電學與磁學有著緊密的關係，本課程會介紹兩者間的種種密不可分關係，Maxwell\'s Laws 是貫穿本學習的重要定律，想要學會電磁學，就不能不懂 Maxwell\'s Law。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問那下列哪一條並非 Maxwell\'s Law？'),
				'CHOICES: ["電通量密度＝介電係數×電場強度","電通量密度的散度＝單位體積電荷密度","磁通量密度的散度＝０","磁場強度的旋度＝單位面積電流密度＋單位時間內電通量密度的變化"]',
				'CHOICE_0',
					t('恭喜答對了呦～正確的應該是電場強度的旋度＝-1×單位時間內磁通量密度的變化'),
					s(ev+'.take()'),
				'CHOICE_1',
					s(ev+'.fail("不然你覺得什麼才是 Maxwell\'s Laws？再修一次會更清楚。")'),
				'CHOICE_2',
					s(ev+'.fail("不然你覺得什麼才是 Maxwell\'s Laws？再修一次會更清楚。")'),
				'CHOICE_3',
					s(ev+'.fail("不然你覺得什麼才是 Maxwell\'s Laws？再修一次會更清楚。")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
