var path = require('path')
var webpack = require('webpack')

// var marked = require('marked')
// const renderer = new marked.Renderer()
// renderer.hr = () => {
//   return '';
// }
//
// renderer.heading = (text, level) => {
//   return `
//     <h${level} id="env-${text}">${text}</h${level}>
//   `
// }
//
// renderer.table = (header, body) => {
//   return `
//     <table class="table table-bordered">${header}${body}</table>
//   `
// }

module.exports = {
  entry: ['whatwg-fetch', 'babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'http://localhost:8000/data-assets/dist/',
    publicPath:
      process.env.NODE_ENV === 'production' ?
        './dist' :
        'http://localhost:3000/dist/',
    filename: 'build.js',
    chunkFilename: '[id].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 10000,
          publicPath: '../imgs/', // 修改图片的引用路径
          // outputPath: 'dist/img',
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }

    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue',
    },
    extensions: ['.js', '.vue']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
