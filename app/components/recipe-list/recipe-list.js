import React, {Component} from 'react';
import RecipeListItem from '../recipe-list-item/recipe-list-item';

class RecipeList extends Component {
  render() {
    return (
      <ul className="recipe-list">
        {this.props.recipes.entries.map(
          (recipe, index) => <RecipeListItem key={`recipe-${index}`}
                                             recipe={recipe}/>
        )}
      </ul>
    );
  }
}

export default RecipeList;
