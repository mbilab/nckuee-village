RPGJS_Canvas.Scene.New({
	name: "Scene_Gameover",
	
	materials: {
		images: {
//			background: "Graphics/Gameovers/gameover.jpg",
			cce: "Graphics/Gameovers/cce.jpg",
			comm: "Graphics/Gameovers/comm.jpg",
			master: "Graphics/Gameovers/master.jpg",
			mse: "Graphics/Gameovers/mse.jpg",
			postpone: "Graphics/Gameovers/postpone.jpg",
		}
	},
	
	ready: function(stage) {
	
		var background = this.createElement();
		background.drawImage('cce');
		stage.append(background);

		var content = this.createElement();
		var text = RPGJS_Canvas.Text.New(this, '恭喜順利畢業，因為你有選修Ａ課程\n、Ｂ課程、Ｃ課程、Ｄ課程，推薦你\n可以往電通所發展');
		text.style({
			color: 'red',
			family: '微軟正黑體',
			shadow: '0 0 5 #ffffff',
			size: '40px',
			textBaseline: 'top',
		});
		text.draw(content, 0, 0);
		stage.append(content);

		RPGJS_Canvas.Timeline.new(content).to({
			y: 200,
		}, 20, Ease.easeOutBack).call();
		
		RPGJS_Canvas.Input.press([Input.Enter, Input.Space], function() {
			RPGJS.scene.call("Scene_Title");
		});
		
		stage.on("touch", function() {
			RPGJS.scene.call("Scene_Title");
		});
		
		RPGJS.Plugin.call("Sprite", "gameover", [this]);
		
	},
});

// vi:nowrap:sw=4:ts=4
