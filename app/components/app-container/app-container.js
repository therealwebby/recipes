import React, { Component } from 'react';
import RecipeListContainer from '../recipe-list-container/recipe-list-container';
import './app-container.css';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RecipeListContainer />
    );
  }
}

export default AppContainer
