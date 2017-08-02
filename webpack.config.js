const path = require ('path');

module.exports = {
  entry: path.resolve("src", "main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "eval-source-map"
}
