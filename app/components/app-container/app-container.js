import React, { Component } from 'react';
import styles from './app-container.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/recipe-actions';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  componentDidMount() {
    this.props.fetchRecipes();
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.recipes.entries[0].title}</h1>
        {this.props.isFetching && <p>loading</p>}
      </div>
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  const { recipes } = state;
  const { isFetching } = recipes;
  
  return {
    recipes,
    isFetching
  }
}

export default connect(mapStateToProps, mapDispachToProps)(AppContainer)