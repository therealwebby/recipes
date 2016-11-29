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
        {this.props.isFetching && <p>loading</p>}
      </div>
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  const { reicpes } = state;
  const { isFetching } = reicpes;
  
  return {
    reicpes,
    isFetching
  }
}

export default connect(mapStateToProps, mapDispachToProps)(AppContainer)