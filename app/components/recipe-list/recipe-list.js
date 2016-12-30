import React, { Component } from 'react';

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <ul className="recipe-list">{this.props.recipes.entries.map(this.renderRecipe)}</ul>
  }
  
  renderRecipe(recipe) {
    return (
      <li key={recipe._id}>
        <div className="recipe-list__title">
          {recipe.title}
        </div>
        <div className="recipe-list__created-on">
          {recipe.created}
        </div>
        <div className="recipe-list__description">
          {recipe.description}
        </div>
      </li>);
  }
}

export default RecipeList;
