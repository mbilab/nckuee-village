var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 23, ev = 'game.ev['+map+']['+id+']', name = '固態物理';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 12; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('固態物理學的對象是固體 ，特別是原子排列具有周期性結構的晶體。是從微觀上解釋固體材料的宏觀物理性質，理論基礎是非相對論性的量子力學 ，還會使用到電動力學、 統計物理中的理論。 主要方法是應用薛丁格方程式來描述固體物質的電子態 ，並使用布洛赫波函數表達晶體週期性勢場中的電子態。 '),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問鑽石的結晶體呈現何種形狀？'),
				'CHOICES: ["三角錐","四角錐","五角錐","六角錐"]',
				'CHOICE_0',
					s(ev+'.take("答對了！觀念不錯喔～")'),
				'CHOICE_1',
					s(ev+'.fail("答錯了！是三角錐才對喔～")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！是三角錐才對喔～")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！是三角錐才對喔～")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
