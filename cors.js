'use strict';

module.exports = function ( req, res, next ) {
  if (!req.get('Origin')) return next();

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if ('OPTIONS' == req.method) return res.send(200);

  next();
};