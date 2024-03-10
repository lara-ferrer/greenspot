import path from path;


module.exports = {
    entry: './src/App.tsx',
    target: "node",
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