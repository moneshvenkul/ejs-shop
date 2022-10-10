var express = require('express');
var app = express();
var {data} = require('./data.js');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index',{
        products: data,
    });
    });

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
    });


