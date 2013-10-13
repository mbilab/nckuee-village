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
		escape: function(s){ return s.replace(/"/g,'\\"') },
	});

	G.Ev = function( opt, cmds ){ // Ev class
		$.extend( true, this, opt );
		if (!G.defined(this.graphic)) this.graphic = this.id + 1; // 1 for the actor
		if (!G.defined(this.x)) this.x = ( (this.id-1) % 5 ) * 2 + 5;
		if (!G.defined(this.y)) this.y = Math.floor(this.id/5) * 2 + 5;
		RPGJS.setEvent( this.map, this.id, [{
			id: this.id,
			x: this.x,
			y: this.y,
		},[{
			commands: cmds,
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
			if ( G.hp >= this.hp_cost() ) RPGJS.Variables.data[0] = 1;
			else RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		},
		frequence: 2,
		init: function(){},
		is_took: function(){ RPGJS.Variables.data[0] = this.took ? '你已經修過 '+this.name+' 了！' : 0 },
		speed: 1,
		take: function(){
			var hp_cost = this.hp_cost();
			if ( G.hp < hp_cost ) return RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
			this.took = true;
			G.hp -= hp_cost;
			G.n_took++;
			RPGJS.Variables.data[0] = '習得了 '+this.name+' ！\n消耗 '+hp_cost+' 點體力，還剩 '+G.hp+' 點體力。';
		},
		took: false,
		trigger: 'action_button',
		type: 'fixed',
	};
	G.Ev.prototype.cmd = {
		// command related helper, don't override these
		script: function(s) {
			s = s.replace( /^v0\(/, 'game.Ev.prototype.v0(' );
			return 'SCRIPT: {"text": "'+G.escape(s)+'"}'
		},
		text: function(t,p) {
			t = -1 === t.search('\n')
			? t.replace(/(.{21})/g,'$1\\n') // without \n, auto wrap
			: t.replace(/\n/g,'\\n'); // with \n, make them \\n
			t = G.escape(t);
			if ( 'undefined' != typeof p ){
				return 'SHOW_TEXT: {"filename":"'+p.filename+'","id":"'+p.id+'","text": "'+t+'"}';
			} else {
				return 'SHOW_TEXT: {"text": "'+t+'"}';
			}
		},
		v0: function(v) { return G.Ev.prototype.cmd.script('RPGJS.Variables.data[0] = '+v) },
	};
})(jQuery,game);

// vi:nowrap:sw=4:ts=4
