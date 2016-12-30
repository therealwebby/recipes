import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import recipes from './recipe-reducers'

const rootReducer = combineReducers({ recipes });

export default rootReducer;
