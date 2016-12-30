import React, { Component } from 'react';
import RecipeList from '../recipe-list/recipe-list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/recipe-actions';

class RecipeListContainer extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    this.props.fetchRecipes();
  }
  
  render() {
    return (<RecipeList recipes={this.props.recipes}/>);
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

export default connect(mapStateToProps, mapDispachToProps)(RecipeListContainer);
