import path from path;
import node from "file.node";

module.exports = {
    entry: './src/App.tsx',
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.ts$/, use: 'ts-loader'},
            {
                test: /\.node$/,
                loader: "node-loader",
              },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.tsx', '...']
    }
};