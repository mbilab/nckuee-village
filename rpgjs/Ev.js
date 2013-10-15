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
	});

	G.Ev = function( opt, cmds ){ // Ev class
		$.extend( true, this, opt );
		if ( !G.defined(this.graphic) ) this.graphic = this.id + 1; // 1 for the actor
		if ( !G.defined(this.x) ) this.x = ( (this.id-1) % 5 ) * 2 + 5;
		if ( !G.defined(this.y) ) this.y = Math.floor( (this.id-1) / 5 ) * 2 + 5;
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
			if ( G.hp >= this.hp_cost() ) RPGJS.Variables.data[0] = 1;
			else RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		},
		fail: function(t,hp_cost){
			if ( !G.defined(hp_cost) ) hp_cost = this.hp_cost();
			G.hp -= this.hp_cost();
			G.n_failed++;
			RPGJS.Variables.data[0] = t+'\n消耗 '+hp_cost+' 點體力，還剩 '+G.hp+' 點體力。';
		},
		frequence: 2,
		init: function(){},
		is_took: function(){ RPGJS.Variables.data[0] = this.took ? '你已經修過 '+this.name+' 了！' : 0 },
		speed: 1,
		take: function(hp_cost){
			if ( !G.defined(hp_cost) ) hp_cost = this.hp_cost();
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
		text: function( text, p ) {
			// wrap
			var n = r = 42;
			var token = text.match(/\n|[\x00-\xff]+|[^\x00-\xff]+/ig);
			text = '';
			for ( var i = 0; i < token.length; i++ ) {
				if ( "\n" === token[i] ) { r = n; text += "\n"; }
				else if ( token[i].match(/[\x00-\xff]/i) ) {
					if ( token[i].length < r ) { r -= token[i].length; text += token[i]; }
					else if ( token[i].length == r ) { r = n; text += token[i]+"\n"; }
					else { text += token[i].substr( 0, r-1 )+"-\n"; token[i] = token[i].substr(r-1); i--; r = n; }
				} else {
					if ( token[i].length < r/2 ) { r -= token[i].length*2; text += token[i]; }
					else if ( token[i].length == r/2 ) { r = n; text += token[i]+"\n"; }
					else { text += token[i].substr( 0, r/2 )+"\n"; token[i] = token[i].substr(r/2); i--; r = n; }
				}
			}

			text = G.escape(text);
			if ( 'undefined' != typeof p ){
				return 'SHOW_TEXT: {"filename":"'+p.filename+'","id":"'+p.id+'","text": "'+text+'"}';
			} else {
				return 'SHOW_TEXT: {"text": "'+text+'"}';
			}
		},
		v0: function(v) { return G.Ev.prototype.cmd.script('RPGJS.Variables.data[0] = "'+v+'"') },
	};
})(jQuery,game);

// vi:nowrap:sw=4:ts=4
