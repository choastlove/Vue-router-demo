/*
* @Author: clearlove
* @Date:   2016-12-07 16:17:19
* @Last Modified by:   clearlove
* @Last Modified time: 2016-12-07 18:57:21
*/

'use strict';
module.exports={
    entry:'./main.js',
    output:{
        path:__dirname,
        filename:'build.js'
    },
    module:{
        loaders:[
            {test:/\.vue$/,loader:'vue'},
            {test:/\.js$/,loader:'babel',exclude:/node_modules/}
        ]
    },
    babel:{
        presets:['es2015'],
        plugins:['transform-runtime']
    }
}