var path = require("path");
var webpack = require("webpack");
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/object-assist.ts'
    },
    mode: "production",
    output: {
        path: __dirname,
        filename: '[name].js',
        libraryTarget: 'amd',
        library: 'Lib',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [
          new TypescriptDeclarationPlugin({
            out: 'interfaces.d.ts'
          }),
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    }
};
