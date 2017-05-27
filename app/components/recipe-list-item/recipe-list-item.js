import React, {Component} from 'react';
import './recipe-list-item.css';

class RecipeListItem extends Component {
  render() {
    return (
      <li className="recipe-list-item">
        <div className="recipe-list-item__title">
          {this.props.recipe.title}
        </div>
        <div className="recipe-list-item__created-on">
          {this.props.recipe.created}
        </div>
        <div className="recipe-list-item__description">
          {this.props.recipe.description}
        </div>
      </li>
    )
  }
}

export default RecipeListItem;
