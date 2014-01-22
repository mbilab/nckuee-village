$(document).ready(function(){
	RPGJS.defines({
		canvas: 'canvas'
	}).ready(function(){
		RPGJS.Player.init({
			actor: 1,
			start: { x: 4, y: 4, id: 1 },
		});
//		$.extend(RPGJS_Canvas.Scene.get('Scene_Map').data,{musics:{bgm:0}});
		RPGJS.scene.call('Scene_Title');
//		CE.io ? RPGJS.scene.call("Scene_Map") : RPGJS.scene.call("Scene_Map").load();
//		RPGJS.scene.call('Scene_Gameover');
	});
	game.reset_semester();

	// configuration panel
	game.$cfg = $('#cfg');
	game.canvas_wd = $('#game').offset().left + $('#game').outerWidth() + 30;
	game.cfg_min_wd = 250;
	game.min_wd = game.canvas_wd + game.cfg_min_wd;
	$(window).resize(function(){
		var ht = $(this).height(), wd = $(this).width();
		game.$cfg.height(ht).width(wd<game.min_wd?game.cfg_min_wd:wd-game.canvas_wd);
		if ( '0px' !== game.$cfg.css('right') ) game.$cfg.css( 'right', -1.1*game.$cfg.width() );
	}).resize();
	game.$cfg.css( 'right', -1.1*game.$cfg.width() ).css( 'display', 'block' );
	$('#_cfg').click(function(){
		if ( '0px' === game.$cfg.css('right') ) { // hide
			$('#_cfg').removeClass('shown');
			game.$cfg.animate({
				right: -1.1*game.$cfg.width(),
			}, 100);
		} else { // show
			$('#_cfg').addClass('shown');
			game.$cfg.animate({
				right: 0,
			}, 100);
		}
	});

	// cheat
	var take = function(ev1,ev2,attr){
		var req_ev = { 1:ev1, 2:ev2 };
		[1,2].forEach(function(map){
			req_ev[map].forEach(function(i){
				if ( !game.ev[map][i] ) game.ev[map][i] = {};
				game.ev[map][i][attr] = true;
			});
		});
	}
	$(document).keydown(function(e){
		if ( 119 != e.which ) return true;
		var id = 0;
		switch (game.current_scene().name) {
			case 'Scene_Title': id = 1; break;
			case 'Scene_Map': id = 2; break;
			case 'Scene_Gameover': id = 3; break;
		}
		if ( 0 == id ) return true;
		if ( game.mute ) {
			game.mute = false;
			game.play_music(id);
		} else {
			game.pause_music(id);
			game.mute = true;
		}
		return true;
	}).keypress(function(e){
		if ( 33 == e.which ) {
			if ( '' == game.cheat ) { game.cheat = '!'; return true; }
			/four|req|six/.test(game.cheat)
			switch (game.cheat) {
				case '!four':
					game.semester.n_passed = 4;
					console.log('這學期修四門課了！');
					break;
				case '!req':
					take( [2,3,4,5,6,7,8,9,11,14,15], [2,3,4,5,6], 'passed' );
					take( [44,45], [43,44], 'took' );
					console.log('修完必修學分了！');
					break;
				case '!six':
					game.player.i_semester = 5
					console.log('修過六個學期了！');
					break;
				default:
					game.cheat = '';
					return true;
			}
			RPGJS.System.sePlay(1);
			var scene = game.current_scene();
			var effect = RPGJS_Canvas.Effect.New(scene, scene._stage);
			effect.shake(1, 30, 30, 'xy');
//			effect.screenFlash('f43140', 30);
			game.cheat = '';
		} else if ( game.cheat.length ) game.cheat += String.fromCharCode(e.keyCode);
		return true;
	});
});

// vi:nowrap:sw=4:ts=4
