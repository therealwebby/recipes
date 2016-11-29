/**
 * @file recipe.js
 * @description Mongo db model for a player.
 * Made up for multiple objects that can be found in player-stats
 *
 * @author Alex Webb
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, default: '' },
  ingredients: { type: Array, default: [] },
  description: { type: String, default: '' },
  steps: { type: Array, default: [] },
  body: { type: String, default: '' },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', recipeSchema);

