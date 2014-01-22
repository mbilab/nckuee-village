var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 24, ev = 'game.ev['+map+']['+id+']', name = '系統程式';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 18; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('人們是怎麼和電腦溝通的呢？相信你曾聽別人說過電腦只看得懂 0 和 1！而在系統程式這門課中，教授帶著你入門，提點著 assembly language, compiler 以及 OS 等等的基本觀念，讓你一窺那神秘的電腦世界！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('身為一個電腦工程師，必定會使用過編譯器(Compiler)，那編譯器是怎麼把工程師所寫的code轉變成電腦看得懂得語言呢？'),
				'CHOICES: ["Source code -> Lexical analysis -> Semantic analysis -> Syntactic analysis -> Code generation","Source code -> Lexical analysis -> Syntactic analysis -> Semantic analysis -> Code generation","Source code -> Semantic analysis -> Lexical analysis -> Syntactic analysis -> Code generation","Source code -> Syntactic analysis -> Lexical analysis -> Semantic analysis -> Code generation"]',
				'CHOICE_0',
					s(ev+'.fail("n/a")'),
				'CHOICE_1',
					s(ev+'.fail("n/a")'),
				'CHOICE_2',
					s(ev+'.fail("n/a")'),
				'CHOICE_3',
					s(ev+'.fail("n/a")'),
				'ENDCHOICES',
			'ENDIF',
		"ENDIF",
	'CHOICE_1',
	'ENDCHOICES',
	'IF: "0 != variable[0]"',
		t('%V[0]'),
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
