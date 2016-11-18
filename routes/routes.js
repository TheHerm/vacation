const express = require('express');
const routes = express();
const models = require('../models/models.js');


routes.get('/', function(req, res, next){
    Promise.all([models.hotel.findAll(),
      models.restaurant.findAll(),
      models.activity.findAll()])
        .then(function(results){
          res.render('index', {
            hotels: results[0],
            restaurants: results[1],
            thingstodo: results[2]
          })
        }).catch(next);
});

routes.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

routes.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('err', {err: err});
});

module.exports = routes;