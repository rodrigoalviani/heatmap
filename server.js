'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('./cors')
  , app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/event', function (req, res) {
  console.log(req.body);
  res.end();
});

app.listen(3000, function(){
    console.log('server listen port 3000');
});