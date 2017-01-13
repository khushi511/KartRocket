var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve( __dirname, 'app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
	  loaders: [
	    {
	      	test: /\.jsx?$/,
	      	exclude: /(node_modules|bower_components)/,
	      	include: APP_DIR,
	      	loader: 'babel', // 'babel-loader' is also a valid name to reference
	      	query: {
	        	presets: ['es2015','stage-0', 'react']
	      	}
	    },
	    { 
	    	test: /\.css$/, 
	    	loader: "style!css" 
		},
	    {
	      	test: /\.scss$/,
	      	loaders: ["style", "css", "sass"]
	    }
	  ]
	}
};

module.exports = config;
