(function(){
	var map = 2, id = 1, ev = 'game.ev['+map+']['+id+']';
	game.ev[map][id] = {
		init: function(){
			RPGJS.setEvent(map,id,[
				{
					"id": id,
					"x": 2,
					"y": 1,
					"name": id
				},
				[{
					'frequence': game.ev.frequence,
					'graphic': 2,
   		   			'speed': game.ev.speed,
					'trigger': 'action_button',
					'type': game.ev.type,
					'commands': [
						game.script('remove_type_move', id,'&quote;'+game.ev.type+'&quote;'),
						game.script('v0', ev+'.opening_read'),
						'IF: "0 == variable[0]"',
							'SCRIPT: {"text": "'+ev+'.opening_read = 1"}',
							game.show_text('歡迎來到「甸跡世界」，這世界是個充滿知識的神秘空間，每個在這個世界中的物品、生物都圍繞著各自獨特的「知識能量」，整個世界構築於知識的基礎上，「知識就是一切」，你必須找出在這個世界中的「知識之門」，並蒐集散落在各地區的知識寶石，才能將知識之門打開，回到你原本的世界。'),
						'ENDIF',
						'CHOICES: ["重看開場介紹","操作說明","進入下一個學期"]',
						'CHOICE_0',
							game.show_text('歡迎來到「甸跡世界」，這世界是個充滿知識的神秘空間，每個在這個世界中的物品、生物都圍繞著各自獨特的「知識能量」，整個世界構築於知識的基礎上，「知識就是一切」，你必須找出在這個世界中的「知識之門」，並蒐集散落在各地區的知識寶石，才能將知識之門打開，回到你原本的世界。'),
						'CHOICE_1',
							game.show_text('［Ｅｓｃ］鍵可以查看目前狀態'),
						'CHOICE_2',
							'TRANSFER_PLAYER: {"position-type": "constant", "appointement": {"x":4,"y":4,"id":1}}',
						'ENDCHOICES',
						game.script('set_type_move', id,'&quote;'+game.ev.type+'&quote;'),
					],
				}]]);
		},
		opening_read: 0,
	};
})();

// vi:nowrap:sw=4:ts=4
