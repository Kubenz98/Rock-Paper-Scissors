const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name][ext]",
    },
    module: {
        rules: [{
            test: /\.scss$/i,
            use: [
                "style-loader", //3. style => DOM
                "css-loader", //2. css => js (commonjs)
                "sass-loader" //1. sass => css
            ]
        }],
    }
});