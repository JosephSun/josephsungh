import HtlWebpackPlugin from 'html-webpack-plugin';
const HTMLWebpackPluginConfig = new HTMLWebpackPluginConfig({
  template: `${__dirname} /app/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.coffee$/, exclude: /node_modules/, loader: "coffee-loader"}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: `${__dirname} /dist`
  }
};
