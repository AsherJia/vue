var path = require('path');

module.exports = {
	entry: './src/main',
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
		publicPath: '/dist/'
	},
	devServer: {
        hot: false,
        inline: true
    },
	module: {
		loaders: [
			// 解析.vue文件
			{ test: /\.vue$/, loader: 'vue' },
			// 转化ES6的语法
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
		]
	},
	babel: {
		presets: ['es2015']
	},
	resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue']
    }
}
