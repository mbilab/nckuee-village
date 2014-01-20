exports.config = {
	// see https://github.com/brunch/brunch/blob/stable/docs/config.md
	files: {
		javascripts: {
			joinTo: {
				'built/app.js': /^main.js$/,
				'built/ev.js': /^Ev.js$|^map_fall|^map_spring/,
				'built/rpgjs.js': /^core\/Main.js|^core\/game|^core\/sprite/,
			},
		},
		stylesheets: {
			joinTo: {
				'built/app.css': /^app.styl$|^reset.css$/,
			},
			order: {
				before: ['reset.css'],
			},
		},
	},
  modules: {
		wrapper: function(path,data){ return data },
	},
	paths: {
		public: '.',
		watched: ['app.styl','core','Ev.js','main.js','map_fall','map_spring','reset.css'],
	},
	// minify: true
}
// vi:nowrap:sw=2:ts=2
