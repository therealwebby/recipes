/**
 * @file routes.js
 * @description main routes file for the server
 */

'use strict';

const path = require('path');
const config = require('./config/global.js');
const recipesRoutes = require('./routes/recipes.js');

module.exports = function (app) {

  //Recipe route
  app.get(config.api.path + 'recipes', recipesRoutes.getRecipes);
  app.post(config.api.path + 'recipes', recipesRoutes.postRecipes);

  // get all routes
  // load our public/index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'))
  });
};
