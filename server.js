'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , cors = require('./cors')
  , app = express();

require('./models/click');
var Click = mongoose.model('Click');
mongoose.connect('mongodb://localhost/heatmap');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors);

app.post('/event', function (req, res) {
  var click = new Click(req.body);
  click.save(function (err) {
    if (err) console.log(err);
    res.end();
  });
});

app.listen(3000, function(){
  console.log('server listen port 3000');
});