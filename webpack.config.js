// CURRENTLY NOT WORKING

module.exports = {
  entry: {
     page1: "./src/index.js"
  },
  output: {
     // Make sure to use [name] or [id] in output.filename
     //  when using multiple entry points
     path: './src',
     filename: "app.bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: ['node_modules','src/assets/bower','src/app.bundle.js'],
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
          // plugins: ["lodash"]
        }
      }
    ]
  }
};
