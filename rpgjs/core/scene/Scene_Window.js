RPGJS_Canvas.Scene.New({
	name: "Scene_Window",
	_onEnterPress: null,
	_onEnterPressChoice: null,
	ready: function(stage) {
		this.stage = stage;
	},
	
	onEnterPress: function(callback) {
		this._onEnterPress = callback;
	},
	
	onEnterPressChoice: function(callback) {
		this._onEnterPressChoice = callback;
	},
	
	box: function() {
	
		var self = this;
		
		
		//this.window = RPGJS_Canvas.Window.New(this, 500, 200, "window");
		this.window = RPGJS_Canvas.Window.New(this, 600, 200, "window");
		this.window.setBackground("#32343A", 6, .7);
		
		this.window.position("bottom");
		this.window.open(this.stage);
		
		RPGJS_Canvas.Input.reset();
		
		RPGJS_Canvas.Input.press([Input.Enter, Input.Space], function() {
			if (self._onEnterPress) self._onEnterPress.call(this);
		});
	
	},
	
	
	choices: function(array) {
	
		var el, text, array_el = [],
			_canvas = this.getCanvas(),
			self = this;
	
		function determineSizeBox() {
			var max_width = 0, width;
			for (var i=0 ; i < array.length ; i++) {
				 width = _canvas.measureText(array[i], "18px").width;
				 if (width > max_width) {
					max_width = width;
				 }
			}
			return max_width;
		}
		
		var width = determineSizeBox() + 50,
			height = array.length * 35 + 25;
			
		var box = RPGJS_Canvas.Window.New(this, width, height, "window");
		box.setBackground("#32343A", 6, .7);
		// var box = RPGJS_Canvas.Window.new(this, width, height);
			
		box.position("top");
		
		for (var i=0 ; i < array.length ; i++) {
			el = this.createElement(35, width);
			el.y = i * 35;
			el.attr('index', i);
			text = RPGJS_Canvas.Text.new(this, array[i]);
			text.style({
				size: "18px",
				color: "white"
			}).draw(el, 0, 10);
			array_el.push(el);
			box.getContent().append(el);
		}
	
		var cursor = this.createElement();
		cursor.fillStyle = "#7778AA";
		cursor.fillRect(-10, -10, width-30, 30);
		cursor.opacity = .5;

		box.cursor.init(cursor, array_el);
		
		box.cursor.select(function(el) {
			self._onEnterPressChoice(el.attr('index'));
		});

		box.open(this.stage);
		this.stage.append(cursor);
		
		box.cursor.setIndex(0);
		
		box.cursor.enable(true);
	},
	//text: function(_text) {
	text: function(_text,arg) {
	  	var self = this;
		var content = this.window.getContent();
		content.empty();
		var text = RPGJS_Canvas.Text.new(this, _text);
		var offset = (typeof arg.id !== 'undefined') ? 160 : 80; 

		text.style({
			size: "18px",
			lineWidth: 400,
			color: "white"
		}).draw(content, offset, 20, {
			line: {
				frames: 20,
				onFinish: function() {
					
				}
			}
		});
		if(typeof arg.id !== 'undefined'){
	      		var params = {filename:arg.filename,id:arg.id,opacity:255,'operand-type':"constant",x:20,y:25};
			RPGJS.Path.load("pictures", params.filename, params.id, function(img) {
			  	var bpos = self.window.position();
				var el = self.createElement(img.width,img.height);
				el.drawImage("pictures_" + params.id,0,0,img.width,img.height,0,0,150,150);
				el.x = params.x + bpos.x;
				el.y = params.y + bpos.y;
				el.opacity = params.opacity / 255;
				self.stage.append(el);
			});
		}
	},
	exit: function() {
		RPGJS_Canvas.Scene.get("Scene_Map").keysAssign();
	}
});
