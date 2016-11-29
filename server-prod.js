/**
 * @file Server.js
 *
 * @description The main node server set up
 * @author Alex Webb
 * @copyright Copyright Alex Webb 2016
 * @todo configure this for a live setup
 */

'use strict';

//Load modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//Config
const db = require('./config/db');

const port = 3000;

mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

require('./app/router')(app); // configure our routes
app.listen(port);
console.log('Running on port ' + port);

exports = module.exports = app;
