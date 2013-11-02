var game = {
	ev: { 1: {}, 2: {} },
	init: function(){
		RPGJS.defines({
			canvas: 'canvas'
		}).ready(function(){
			RPGJS.Player.init({
				actor: 1,
				start: { x: 4, y: 4, id: 1 },
			});
			RPGJS.scene.call('Scene_Title');
		});
	},
	player: {
		hp: 100,
		i_semester: 0,
		max_hp: 100,
		n_failed: 0,
		n_passed: 0,
		name: 'Player',
	},
	reset_semester: function(){
		this.semester = {
			ev: {},
			n_failed: 0,
			n_passed: 0,
		};
	},
	show_semester: function(n){ 
		var r;
		var term = n%2;
		n = parseInt(n/2);
		switch(n++){
			case 0:r=n+'st';break;
			case 1:r=n+'nd';break;
			case 2:r=n+'rd';break;
			case 3:r=n+'th';break;
		}
		r += ' year ';
		switch (term++){
			case 0:r+=term+'st';break;
			case 1:r+=term+'nd';break;
		}
		r += ' term';
		return r;
	}
};
game.reset_semester();

(function($){$(document).ready(function(){
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
})})(jQuery);

// the above might be moved out to another js file such as game.js

(function($,G){
	$.extend( true, G, { // global helper
		defined: function(root){
			if ( 'undefined' === typeof root ) return false;
			for ( var i = 1; i < arguments.length; i++ ) {
				if ( !root.hasOwnProperty(arguments[i]) ) return false;
				root = root[arguments[i]];
			}
			return true;
		},
		escape: function(s){ return s.replace(/"/g,'\\"').replace(/\n/g,"\\n") },
		wrap: function( text, width ){
			var r = width; // remain width
			var token = text.match(/\n|[\x00-\xff]+|[^\x00-\xff]+/ig);
			text = '';
			for ( var i = 0; i < token.length; i++ ) {
				if ( "\n" === token[i] ) { r = width; text += "\n"; }
				else if ( token[i].match(/[\x00-\xff]/i) ) {
					if ( token[i].length < r ) { r -= token[i].length; text += token[i]; }
					else if ( token[i].length == r ) { r = width; text += token[i]+"\n"; }
					else { text += token[i].substr( 0, r-1 )+"-\n"; token[i] = token[i].substr(r-1); i--; r = width; }
				} else {
					if ( token[i].length < r/2 ) { r -= token[i].length*2; text += token[i]; }
					else if ( token[i].length == r/2 ) { r = width; text += token[i]+"\n"; }
					else { text += token[i].substr( 0, r/2 )+"\n"; token[i] = token[i].substr(r/2); i--; r = width; }
				}
			}
			return text;
		},
	});

	G.Ev = function( opt, cmds ){ // Ev class
		$.extend( true, this, opt );
		if ( !G.defined(this.graphic) ) this.graphic = this.id + 1; // 1 for the actor
		if ( !G.defined(this.x) ) this.x = ( (this.id-1) % 5 ) * 2 + 5;
		if ( !G.defined(this.y) ) this.y = Math.floor( (this.id-1) / 5 ) * 2 + 5;
		G.semester.ev[opt.id] = { is_failed: 0 };
		RPGJS.setEvent( this.map, this.id, [{
			id: this.id,
			x: this.x,
			y: this.y,
		},[{
			commands: [].concat.apply( [], cmds ),
			frequence: this.frequence,
			graphic: this.graphic,
			speed: this.speed,
			trigger: this.trigger,
			type: this.type,
		}]]);
	};
	G.Ev.prototype = { // Ev helper and overridable
		// helper, you can override these but not suggested
		// command related helper is stored in cmd below
		start: function(){
			switch (this.type) {
				case 'approach': global.game_map.getEvent(this.id).approachPlayer(); break;
				case 'random': global.game_map.getEvent(this.id).moveRandom(); break;
			}
		},
		stop: function(){ global.game_map.getEvent(this.id).removeTypeMove('random') },
		v0: function(v) { RPGJS.Variables.data[0] = v }, // useful for cmd.script()
		// overridable, override these only if necessary
		can_take: function(){
			if ( G.player.hp >= this.hp_cost() ) RPGJS.Variables.data[0] = 1;
			else RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		},
		fail: function(t,hp_cost){
			if ( !G.defined(hp_cost) ) hp_cost = this.hp_cost();
			G.player.hp -= this.hp_cost();
			G.player.n_failed++;
			G.semester.n_failed++;
			G.semester.ev[this.id].is_failed = 1;
			RPGJS.Variables.data[0] = t+'\n消耗 '+hp_cost+' 點體力，還剩 '+G.player.hp+' 點體力。';
		},
		frequence: 2,
		init: function(){},
		is_took: function(){
			if ( this.is_passed ) return RPGJS.Variables.data[0] = '你已經修過 '+this.name+' 了！';
			if ( game.semester.ev[this.id].is_failed ) return RPGJS.Variables.data[0] = '你這學期已經被當過了，請等下一個學年再選修。';
			return RPGJS.Variables.data[0] = 0;
		},
		is_passed: false,
		speed: 1,
		take: function(hp_cost){
			if ( !G.defined(hp_cost) ) hp_cost = this.hp_cost();
			if ( G.player.hp < hp_cost ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
			this.is_passed = true;
			G.player.hp -= hp_cost;
			G.player.n_passed++;
			G.semester.n_passed++;
			RPGJS.Variables.data[0] = '習得了 '+this.name+' ！\n消耗 '+hp_cost+' 點體力，還剩 '+G.player.hp+' 點體力。';
			RPGJS.System.sePlay(1);
		},
		trigger: 'action_button',
		type: 'fixed',
	};
	G.Ev.prototype.cmd = {
		// command related helper, don't override these
		script: function(s) {
			s = s.replace( /^v0\(/, 'game.Ev.prototype.v0(' );
			return 'SCRIPT: {"text": "'+G.escape(s)+'"}'
		},
		text: function( text, id ) {
			text = G.escape(text);
			if ( 'undefined' != typeof id ){
				return 'SHOW_TEXT: {"id":"'+id+'","text": "'+text+'"}';
			} else {
				return 'SHOW_TEXT: {"text": "'+text+'"}';
			}
		},
		v0: function(v) { return G.Ev.prototype.cmd.script('RPGJS.Variables.data[0] = "'+v+'"') },
	};
})(jQuery,game);

// vi:nowrap:sw=4:ts=4
