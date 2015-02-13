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
    res.status(201).end();
  });
});

app.get('/events', function (req, res) {
	Click
    .distinct('page', function (err, docs) {
      if (err) console.log(err);
      res.status(200).json({pages: docs}).end();
    });
});

app.get('/event/:page', function (req, res) {
  Click
    .find({page: req.params.page}, '-_id -__v -page -date')
    .sort('date')
    .exec(function (err, docs) {
      if (err) console.log(err);
      res.status(200).json({clicks: docs}).end();
    });
});

app.listen(3000, function(){
  console.log('server listen port 3000');
});