exports.config = {
	// see https://github.com/brunch/brunch/blob/stable/docs/config.md
	files: {
		javascripts: {
			joinTo: {
				'rpgjs.js': /^core/,
			},
			order: {
				before: [
					'core/Main.js',
				],
			},
		},
	},
  modules: {
		wrapper: function(path,data){ return "\n"+data },
	},
	paths: {
		public: '.',
		watched: ['core'],
	},
	// minify: true
}
// vi:nowrap:sw=2:ts=2
