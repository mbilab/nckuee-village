(function(){
	var id = 1;
	game.ev[id] = {
		init: function(){
			var e = RPGJS.Map.createEvent( id, 0, 0 );
			e.addPage({
				'graphic': 2,
				'trigger': 'action_button',
				'type': 'fixed',
			}, [
				game.show_text('�w��Ө�u�l��@�ɡv�A�o�@�ɬO�ӥR�����Ѫ������Ŷ��A�C�Ӧb�o�ӥ@�ɤ������~�B�ͪ�����¶�ۦU�ۿW�S���u���ѯ�q�v�A��ӥ@�ɺc�v���Ѫ���¦�W�A�u���ѴN�O�@���v�A�A������X�b�o�ӥ@�ɤ����u���Ѥ����v�A�û`�������b�U�a�Ϫ������_�ۡA�~��N���Ѥ������}�A�^��A�쥻���@�ɡC'),
			]);
			e.display();
		},
	};
})();

// vi:nowrap:sw=4:ts=4
