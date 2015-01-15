'use strict';

var express = require('express'),
  app = express();

app.post('/event', function (req, res) {
  console.log(req);
});

app.listen(3000, function(){
    console.log('server listen port 3000');
});