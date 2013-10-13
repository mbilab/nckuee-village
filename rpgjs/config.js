exports.config = {
	// see https://github.com/brunch/brunch/blob/stable/docs/config.md
	files: {
		javascripts: {
			joinTo: {
//				'rpgjs-built.js': /^core/,
				'ev-built.js': /^Ev.js$|^map_fall/,
			},
			order: {
				before: [
					'core/Main.js',
				],
			},
		},
	},
  modules: {
		wrapper: function(path,data){ return "\n\n(function(){\n"+data+"})()" },
	},
	paths: {
		public: '.',
		watched: ['core','Ev.js','map_fall'],
	},
	// minify: true
}
// vi:nowrap:sw=2:ts=2
