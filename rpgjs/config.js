exports.config = {
	// see https://github.com/brunch/brunch/blob/stable/docs/config.md
	files: {
		javascripts: {
			joinTo: {
				'rpgjs-built.js': /^core\/Main.js|^core\/game|^core\/sprite/,
				'ev-built.js': /^Ev.js$|^map_fall|^map_spring/,
			},
			order: {
				before: [
					'core/Main.js',
				],
			},
		},
	},
  modules: {
//		wrapper: function(path,data){ return "\n\n(function(){\n"+data+"})()" },
		wrapper: function(path,data){ return data },
	},
	paths: {
		public: '.',
		watched: ['core','Ev.js','map_fall','map_spring'],
	},
	// minify: true
}
// vi:nowrap:sw=2:ts=2
