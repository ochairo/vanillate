const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// TODO: Add webpack-merge
console.info("NODE_ENV:", process.env.NODE_ENV);
module.exports = {
  mode: "production",
  entry: "./src/app/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.ts$/i, loader: "swc-loader" },
      { test: /\.html$/i, loader: "html-loader" },
      { test: /\.css$/i, use: ["css-loader", "postcss-loader"] },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".html", ".css"],
    alias: {
      // FEATURES
      "@showcase": path.resolve("src/app/features/showcase"),
      "@error": path.resolve("src/app/features/error"),
      // CORE
      "@core": path.resolve("src/app/core"),
      // ADAPTERS
      "@adapters": path.resolve("src/app/adapters"),
      // MOCK
      "@mock": path.resolve("src/mock"),
      // TEST
      "@test": path.resolve("src/test"),
      // PACKAGES
      "@packages": path.resolve("src/packages"),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/app/index.html" })],
  watchOptions: { ignored: /node_modules/ },
};
