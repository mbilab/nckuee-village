var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 98, ev = 'game.ev['+map+']['+id+']', name = '教務處鄭先生';
game.ev[map][id] = new game.Ev({
	can_graduate: function(){
		if ( game.player.i_semester < 5 ) return RPGJS.Variables.data[0] = "至少要經過六個學期，才可以畢業喔！";
		var req = this.check( [2,3,4,5,6,7,8,9,11,14,15], [2,3,4,5,6], 'is_passed' );
		if ( req.n_no ) return RPGJS.Variables.data[0] = '尚缺以下 '+req.n_no+' 門必修課喔：\n'+req.no_list;
		req = this.check( [44,45], [43,44], 'is_took' );
		if ( req.n_no ) return RPGJS.Variables.data[0] = '尚缺以下 '+req.n_no+' 門必選課喔：\n'+req.no_list;
		req = this.check( [], [], 'is_passed' );
//		if ( req.n_yes < 16 ) return RPGJS.Variables.data[0] = '尚缺 '+(16-req.n_yes)+' 門選修課，還有以下課程可以選擇：\n'+req.no_list;

		RPGJS.System.fadeOutMusic(180);

		RPGJS.Variables.data[0] = 0;
		var scene = RPGJS_Canvas.Scene.get('Scene_Map');
		var effect = RPGJS_Canvas.Effect.New(scene, scene._stage);
		effect.changeScreenColorTone('000000', 180, 'darker', 1, function(){
			RPGJS.scene.call('Scene_Gameover');
		});

		req = this.check( [18,24,28,37], [20,31], 'passed' );
		if ( 4 <= req.n_yes ) return game.player.gameover = { bg: 'library', msg: '恭喜順利畢業，因為你有選修 '+req.yes_list+' 等課程，推薦你可以往電通所發展' }
		req = this.check( [17,21,23,33], [14,23,26,30], 'passed' );
		if ( 4 <= req.n_yes ) return game.player.gameover = { bg: 'library', msg: '恭喜順利畢業，因為你有選修 '+req.yes_list+' 等課程，推薦你可以往電機所材料組發展' }
		req = this.check( [19,20,26,30], [14,23,26,30], 'passed' );
		if ( 4 <= req.n_yes ) return game.player.gameover = { bg: 'library', msg: '恭喜順利畢業，因為你有選修 '+req.yes_list+' 等課程，推薦你可以往電機所通信組發展' }
		req = this.check( [23], [], 'passed' );
		if ( 1 == req.n_yes ) return game.player.gameover = { bg: 'library', msg: '恭喜順利畢業，因為你有選修 '+req.yes_list+' 等課程，推薦你可以往電機所控制組發展' }
		req = this.check( [26,28,37], [], 'passed' );
		if ( 3 == req.n_yes ) return game.player.gameover = { bg: 'library', msg: '恭喜順利畢業，因為你有選修 '+req.yes_list+' 等課程，推薦你可以往電機所儀器系統與晶片組發展' }
		req = this.check( [35,36], [16,19], 'passed' );
		if ( 4 == req.n_yes ) return game.player.gameover = { bg: 'library', msg: '恭喜順利畢業，因為你有選修 '+req.yes_list+' 等課程，推薦你可以往電機所ＶＬＳＩ／ＣＡＤ組發展' }
		req = this.check( [30,33,39,43,44], [27,30], 'passed' );
		if ( 3 <= req.n_yes ) return game.player.gameover = { bg: 'library', msg: '恭喜順利畢業，因為你有選修 '+req.yes_list+' 等課程，推薦你可以往電機所電力組發展' }
		game.player.gameover = { bg: 'library', msg: '恭喜順利畢業，推薦你可以往微電子所發展' }
	},
	check: function(ev1,ev2,attr){
		var req_ev = { 1:ev1, 2:ev2 };
		var ret = { n_no: 0, n_yes: 0, no_list: '',  yes_list: '' };
		[1,2].forEach(function(map){
			req_ev[map].forEach(function(i){
				if (!game.ev[map][i]){
					++ret.n_yes;
				} else if (game.ev[map][i][attr]) {
					++ret.n_yes;
					ret.yes_list += game.ev[map][i].name+',';
				} else {
					++ret.n_no;
					ret.no_list += game.ev[map][i].name+',';
				}
			});
		});
		if (ret.n_no) ret.no_list = ret.no_list.substring(0, ret.no_list.length-1);
		if (ret.n_yes) ret.yes_list = ret.yes_list.substring(0, ret.yes_list.length-1);
		return ret;
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
	type: 'fixed',
	x: 7,
	y: 4,
}, [
	s(ev+'.stop()'),
	t('想要畢業了嗎？'),
	'CHOICES: ["是的！我準備好了！","還沒！過一陣子我再來！"]',
	'CHOICE_0',
		s(ev+'.can_graduate()'),
	'CHOICE_1',
	'ENDCHOICES',
	'IF: "0 != variable[0]"',
		t('%V[0]'),
	"ENDIF",
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
