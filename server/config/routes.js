// Routes received by the server
var fs = require('fs');
var path = require('path');
var express = require('express');
var Chance = require('chance'),
    chance = new Chance();

module.exports = (app) => {
  app.route('/')
    .get((req, res) => {
      res.render('index.html')
    });

  app.route('/testspec')
  	.get((req, res) => {
  		res.render('testSpec.html');
  	});

  app.route('/*')
    .get((req, res) => {
      res.status(404).send('404');
    });
};