(function(){
	var name = '計算機概論（一）';
	var id = 4;
	game.ev[id] = {
		can_took: function() { },
		hp_cost: function() { return 20; },
		init: function(){
			var e = RPGJS.Map.createEvent( id, 3, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.show_text('電腦科學，不同以往國、高中的一般科目，此課程是你在大一課程中接觸到最靠近專業電機領域的科目。我們將會教你目前比較多人使用的兩種程式語言，C 語言以及 JAVA，第一次碰程式難免陌生，多加練習會有幫助的。'),
				game.show_text('你要修 '+name+' 嗎？'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					game.script( 'is_took', id ),
					'IF: "0 == variable[0]"',
						game.script( 'can_take', id ),
						'IF: "1 == variable[0]"',
							game.show_text('請問在本課程中學會了哪些程式語言？'),
							'CHOICES: ["JAVA","C 語言","兩者有"]',
							'CHOICE_0',
								game.show_text('要重修囉～'),
							'CHOICE_1',
								game.show_text('要重修囉～'),
							'CHOICE_2',
								game.script( 'take', id ),
								game.show_text('%V[0]'),
							'ENDCHOICES',
						'ELSE',
							game.show_text('%V[0]'),
						'ENDIF',
					"ELSE",
						game.show_text('你已經修過 '+name+' 了！'),
					"ENDIF",
				'CHOICE_1',
				'ENDCHOICES',
			]);
			e.display();
		},
		name: name,
		take: null, // set this function and to override, return false to prevent default
	};
})();

// vi:nowrap:sw=4:ts=4
