var isProduction = process.env.NODE_ENV === 'production';

var webpack = require('webpack');


if(isProduction){
    var config = require('./webpack.production.config.js');


}else{
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.development.config.js');

    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(3000, 'localhost', function (err, result) {
        if (err) {
            return console.log(err);
        }

        console.log('Listening at http://localhost:3000/');
    });
}

