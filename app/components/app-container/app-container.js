import React, { Component } from 'react';
import { fetchRecipes } from '../../actions/recipe-actions';
import store from '../../store';
import styles from './app-container.css';

export default class AppContainer extends Component {
  constructor() {
    super();
    store.dispatch(fetchRecipes());
  }

  render() {
    return (
        <div className="main">
          <h1>
            A test
          </h1>
        </div>
    )
  }
};