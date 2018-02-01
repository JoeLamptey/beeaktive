module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,                       
		filename:'/app/js/bundle.js'
	},		
	module: {
		loaders: [
			{
				test: /\.jsx?$/,				
				exclude: /node_modules/,
				loader: 'babel',
				query: {
				  cacheDirectory: true,		          
		          presets: ['es2015','react']
		        }				
			}
		]
	},
	resolve: {
		root: __dirname,
	    fallback: __dirname+ '/node_modules',
	    modulesDirectories: ['node_modules'],
		extensions: ['', '.json', '.js', '.jsx', '.scss', '.png', '.jpg', '.jpeg', '.gif']		
	}	
}