module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "main.js",
    publicPath: "dist"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
            // plugins: ['@babel/plugin-proposal-class-proerties']
          }
        }
      }
    ]
  }
};
