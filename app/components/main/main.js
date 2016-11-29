import React, { Component } from 'react';
import { fetchRecipes } from '../../actions/list-actions';
import store from '../../store';
import styles from './main.css';

export default class Main extends Component {
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