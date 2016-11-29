/**
 * Routes for api/players
 */

'use strict';

const Recipe = require('../models/recipe.js');

class RecipeRoutes {
  getRecipes(request, respond) {
    Recipe.find( (error, recipe) => {
      if (error) {
        respond.send(error);
      }

      respond.json(recipe);
    });
  }

  postRecipes(request, respond) {
    const recipe = new Recipe(request.body);

    recipe.save((error, savedRecipe) => {
      if (error) {
        console.error(error);
        respond.status(500).send({
          status: '500, server error',
          error
        });
      } else {
        respond.send(savedRecipe);
      }
    })
  }
}

module.exports = new RecipeRoutes();
