module.exports = () => {
  return {
    entry: "./index.js",
    output: {
      path: __dirname,
      library: 'App',
      filename: 'bundle.js'
    },
    resolve: {
      symlinks: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules\/(?!my-lib1|my-lib2)/],
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      ]
    },
    devtool: false
  }
};