var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 5, ev = 'game.ev['+map+']['+id+']', name = '基礎國文(二)';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
	t('唐詩、宋詞、元曲是中國文化中的精隨，豈能一問三不知！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問下列哪一位不是唐宋八大家的成員？'),
				'CHOICES: ["韓愈","歐陽修","李白","王安石"]',
				'CHOICE_0',
					s(ev+'.fail("老夫字退之世稱昌黎先生，乃唐宋八大家之一，連老夫都不認識，死當！")'),
				'CHOICE_1',
					s(ev+'.fail("老夫號醉翁、六一居士，乃唐宋八大家之一，連老夫都不認識，死當！")'),
				'CHOICE_2',
					s(ev+'.take("老夫字太白，號青蓮居士，未能被世人列入唐宋八大家，老夫實在是不能理解，還請你幫老夫保守秘密。孩子！恭喜你修過了基礎國文二。")'),
				'CHOICE_3',
					s(ev+'.fail("老夫字介甫，號半山，乃唐宋八大家之一，連老夫都不認識，死當！")'),
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
