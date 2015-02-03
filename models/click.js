'use strict';

var mongoose = require('mongoose');

var ClickSchema = new mongoose.Schema({
  page: {type: String, index: true},
  x:    {type: Number},
  y:    {type: Number},
  w:    {type: Number},
  h:    {type: Number},
  date: {type: Date, default: new Date()}
});

mongoose.model('Click', ClickSchema);