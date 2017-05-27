import React, {Component} from 'react';

class RecipeListItem extends Component {
  render() {
    return (
      <li key={this.props.recipe._id}>
        <div className="recipe-list__title">
          {this.props.recipe.title}
        </div>
        <div className="recipe-list__created-on">
          {this.props.recipe.created}
        </div>
        <div className="recipe-list__description">
          {this.props.recipe.description}
        </div>
      </li>
    )
  }
}

export default RecipeListItem;
