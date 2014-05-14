var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 18, ev = 'game.ev['+map+']['+id+']', name = '計算機組織';
game.ev[map][id] = new game.Ev({
<<<<<<< HEAD
=======
	can_take: function() {
		if ( game.player.hp < this.hp_cost() ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		if ( !game.defined( game, 'ev', 2, 4, 'is_passed' ) ) return RPGJS.Variables.data[0] ='要通過' + game.ev[2][4].name+ '才可以選修本課！';
    	return RPGJS.Variables.data[0] = 1;
	},
>>>>>>> edc0e87a92e42b6273c3baf85c54355096d2bdcc
	hp_cost: function() { return 10; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('計算機概論教你軟體方面的知識，計算機組織則偏重硬體方面，你將可以學到機器語言以及硬體的執行方式、時程與順序，修完課後，你將會更加瞭解CPU以及CPU在電腦中扮演的角色。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問MIPS指令中，add $s1,$s2,$s3 的意思是？'),
				'CHOICES: ["將$s1的資料與$s2的資料相加，存到$s3","將$s2的資料與$s3的資料相加，存到$s1","將$s1的資料與$s3的資料相加，存到$s2","將$s1的資料與$s2還有$s3的資料相加，存到$s3"]',
				'CHOICE_0',
					s(ev+'.fail("答錯了！ＭＩＰＳ指令的順序與一邊我們熟知的運算順序是不同的喔～正確的答案是將$s2的資料與$s3的資料相加，存到$s1")'),
				'CHOICE_1',
					s(ev+'.take("恭喜答對了！這是給機器看的語言喔～現在你也懂了，真是太棒了！")'),
				'CHOICE_2',
					s(ev+'.fail("答錯了！ＭＩＰＳ指令的順序與一邊我們熟知的運算順序是不同的喔～正確的答案是將$s2的資料與$s3的資料相加，存到$s1")'),
				'CHOICE_3',
					s(ev+'.fail("答錯了！ＭＩＰＳ指令的順序與一邊我們熟知的運算順序是不同的喔～正確的答案是將$s2的資料與$s3的資料相加，存到$s1")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
