RPGJS_Canvas.Scene.New({
	name: "Scene_Gameover",
	
	materials: {
		images: {
			actor: "Graphics/Gameovers/actor10-1.png",
			library: "Graphics/Gameovers/library.jpg",
		}
	},
	
	ready: function(stage) {
		var self = this;
		var go = game.player.gameover;
	
		game.play_music(3);

		var bg = self.createElement()
		bg.drawImage(go.bg);
		stage.append(bg);

		var effect = RPGJS_Canvas.Effect.New(self, stage);
		effect.screenFlash('000000', 30, function(){
			var fg = self.createElement();
			fg.drawImage('actor');
			fg.x = -272;
			fg.y = 192;
			stage.append(fg);
			RPGJS_Canvas.Timeline.new(fg).to({x:0}, 30, Ease.easeOutBack).call();

			var msg = self.createElement();
			msg.x = 480;
			var txt = RPGJS_Canvas.Text.New(self, game.wrap(go.msg, 28));
			txt.style({
				color: 'white',
				family: '微軟正黑體',
				shadow: '0 0 5 #000000',
				size: '24px',
				textBaseline: 'top',
			});
			txt.draw(msg, 0, 350);
			stage.append(msg);
			RPGJS_Canvas.Timeline.new(msg).to({x:272}, 30, Ease.easeOutBack).call();
		});
		
		RPGJS_Canvas.Input.press([Input.Enter, Input.Space], function() {
			RPGJS.System.fadeOutMusic(60);
			RPGJS.scene.call("Scene_Title");
		});
		
		stage.on("touch", function() {
			RPGJS.scene.call("Scene_Title");
		});
		
	},
});

// vi:nowrap:sw=4:ts=4
