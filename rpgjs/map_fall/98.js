var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 98, ev = 'game.ev['+map+']['+id+']', name = '教務處鄭先生';
game.ev[map][id] = new game.Ev({
	can_graduate: function(){
		if ( game.player.i_semester < 5 ) return RPGJS.Variables.data[0] = "至少要經過六個學期，才可以畢業喔！";
		var n_req = 0, req = '';
		[2,3,4,5,6,7,8,9,11,14,15].forEach(function(i){
			if (game.ev[1][i].took) return;
			++n_req;
			req += game.ev[1][i].name+',';
		});
		[2,3,4,5,6].forEach(function(i){
			if (game.ev[2][i].took) return;
			++n_req;
			req += game.ev[2][i].name+',';
		});
		if ( 0 < n_req ) return RPGJS.Variables.data[0] = '尚缺以下 '+n_req+' 門必修課喔：\n'+req.substring(0, req.length-1);
		RPGJS.Variables.data[0] = 1;
	},
	graphic: 2,
	id: id,
	map: map,
	name: name,
	next_semester: function(flag){
		var G = game;
		var s = game.semester;
		RPGJS.Variables.data[0] = '你這學期修了 '+(s.n_failed+s.n_passed)+' 門課，通過 '+s.n_passed+' 門，體力剩下 '+game.player.hp+' 點。';
		if ( .5 <= s.n_passed / (s.n_failed+s.n_passed) ) {
			if ( !G.defined(flag) ) RPGJS.Variables.data[0] += "\n確定要進入下一個學期了嗎？";
			else RPGJS.Variables.data[0] = 1 - flag;
		} else if ( 0 == game.player.n_21 ) {
			if ( !G.defined(flag) ) RPGJS.Variables.data[0] += "\n你被２１了，要不要再多修幾門課來避免２１？如果以後再被２１，那就要被退學囉！確定要進入下一學期了嗎？";
			else RPGJS.Variables.data[0] = 1 - flag;
		} else if ( 5 <= game.player.hp ) {
			if ( !G.defined(flag) ) RPGJS.Variables.data[0] += "\n這是你第二次被２１了，趕快再去修課，不然你就要被退學了！是否要再修課？";
			else RPGJS.Variables.data[0] = flag;
		} else {
			console.log('impossible! check dropped_out() and next_semester()');
			if ( !G.defined(flag) ) RPGJS.Variables.data[0] += "\n你太神了，這一行不可能出現才對，看到的話請聯絡開發團隊！";
			else RPGJS.Variables.data[0] = 0;
		}
	},
	took_enough: function(){ RPGJS.Variables.data[0] = (game.semester.n_failed+game.semester.n_passed) >= 4 ? 1 : '至少要修習過 4 門課才可以到下一個學期喔～' },
	x: 7,
	y: 4,
}, [
	s(ev+'.stop()'),
	t('想要畢業了嗎？'),
	'CHOICES: ["是的！我準備好了！","還沒！過一陣子我再來！"]',
	'CHOICE_0',
		s(ev+'.can_graduate()'),
		'IF: "1 == variable[0]"',
			s(ev+'.dropped_out()'),
			'IF: "0 == variable[0]"',
				s(ev+'.next_semester()'),
				t('%V[0]'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					s(ev+'.next_semester(0)'),
				'CHOICE_1',
					s(ev+'.next_semester(1)'),
				'ENDCHOICES',
				'IF: "1 == variable[0]"',
					'TRANSFER_PLAYER: {"position-type": "constant", "appointement": {"x":4,"y":4,"id":2}}',
				'ENDIF',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
