module.exports = {
    entry: "./client/main.jsx",
    output: {
        path: __dirname,
        filename: "./public/javascripts/app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    //externals: {
    //    //don't bundle the 'react' npm package with our bundle.js
    //    //but get it from a global 'React' variable
    //    'react': 'React'
    //},
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
