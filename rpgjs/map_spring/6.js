var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 6, ev = 'game.ev['+map+']['+id+']', name = '大一英文(二)';
var eng2_hp;
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return eng2_hp; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('＜開場介紹＞'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請翻譯ｔｉｃｋｅｔ'),
				'CHOICES: ["票卡","貼紙","便利貼"]',
				'CHOICE_0',
					t('恭喜答對了～進入下一題'),
					t('請翻譯ｈａｌｍｅｔ'),
					'CHOICES: ["洗髮精","安全帽","髮夾"]',
					'CHOICE_0',
						s('eng2_hp = 5'),
						s(ev+'.take("答案是安全帽，可惜答錯囉～")'),
					'CHOICE_1',
						t('恭喜答對了～進入下一題'),
						t('請翻譯ｓｔｏｐｃｏｃｋ'),
						'CHOICES: ["鎖匙","板手","水龍頭"]',
						'CHOICE_0',
						s('eng2_hp = 2'),
							s(ev+'.take("別灰心～能答對到第三題已經很棒了")'),
						'CHOICE_1',
						s('eng2_hp = 2'),
							s(ev+'.take("別灰心～能答對到第三題已經很棒了")'),
						'CHOICE_2',
						s('eng2_hp = 2'),
							s(ev+'.take("恭喜答對了，全對真是太厲害了～")'),
						'ENDCHOICES',
					'CHOICE_2',
						s('eng2_hp = 5'),
						s(ev+'.take("答案是安全帽，可惜答錯囉～")'),
					'ENDCHOICES',
				'CHOICE_1',
						s('eng2_hp = 8'),
					s(ev+'.take("正解是票卡，連這麼基本的都答錯，英文要加強喔！！")'),
				'CHOICE_2',
						s('eng2_hp = 8'),
					s(ev+'.take("正解是票卡，連這麼基本的都答錯，英文要加強喔！！")'),
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
