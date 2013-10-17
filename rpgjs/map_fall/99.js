var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 99, ev = 'game.ev['+map+']['+id+']', name = '系辦王小姐';
game.ev[map][id] = new game.Ev({
	dropped_out: function(){
		if ( .5<=game.semester.n_passed/game.semester.n_took || 0==game.n_21 || 5<=game.hp ) return RPGJS.Variables.data[0] = 0;
		RPGJS.Variables.data[0] = '這是你第二次被２１了，你的體力也不足，無法再修課了，非常遺憾，你被退學了！';
	},
	graphic: 2,
	id: id,
	map: map,
	name: name,
	next_semester: function(flag){
		var s = game.semester;
		RPGJS.Variables.data[0] = '你這學期修了 '+s.n_took+' 門課，通過'+s.n_passed+' 門，體力剩下 '+game.hp+' 點。';
		if ( .5 <= s.n_passed / s.n_took ) {
			if ( !G.defined(flag) ) RPGJS.Variables.data[0] += "\n確定要進入下一個學期了嗎？";
			else RPGJS.Variables.data[0] = flag;
		} else if ( 0 == game.n_21 ) {
			if ( !G.defined(flag) ) RPGJS.Variables.data[0] += "\n你被２１了，要不要再多修幾門課來避免２１？如果以後再被２１，那就要被退學囉！確定要進入下一學期了嗎？";
			else RPGJS.Variables.data[0] = flag;
		} else if ( 5 <= game.hp ) {
			if ( !G.defined(flag) ) RPGJS.Variables.data[0] += "\n這是你第二次被２１了，趕快再去修課，不然你就要被退學了！是否要再修課？";
			else RPGJS.Variables.data[0] = 1 - flag;
		} else {
			console.log('impossible! check dropped_out() and next_semester()');
			if ( !G.defined(flag) ) RPGJS.Variables.data[0] += "\n你太神了，這一行不可能出現才對，看到的話請聯絡開發團隊！";
			else RPGJS.Variables.data[0] = 0;
		}
	},
	took_enough: function(){ RPGJS.Variables.data[0] = game.semester.n_passed >= 4 ? 1 : '至少要修習過 4 門課才可以到下一個學期喔～' },
	x: 5,
	y: 4,
}, [
	s(ev+'.stop()'),
	t('每個學期至少要修４門課才可以進入下一個學期，如果你可以在一個學期內，修習並通過７門課，那麼你下學期可以比別人多有２０點的體力，你想要進入下一個學期了嗎？'),
	'CHOICES: ["是的！我想要進入下一個學期了！","是這樣喔～那我晚點再來！"]',
	'CHOICE_0',
		s(ev+'.took_enough()'),
		'IF: "1 == variable[0]"',
			s(ev+'.dropped_out()'),
			'IF: "0 == variable[0]"',
				s(ev+'.next_semester()'),
				'CHOICES: ["是","否"]',
				'CHOICE_0',
					s(ev+'.next_semester(0)'),
				'CHOICE_1',
					s(ev+'.next_semester(1)'),
				'ENDCHOICES',
				'IF: "1 == variable[0]"',
					'TRANSFER_PLAYER: {"position-type": "constant", "appointement": {"x":1,"y":1,"id":2}}',
				'ENDIF',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
