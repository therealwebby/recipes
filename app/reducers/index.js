import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import reicpes from './recipe-reducers'

const rootReducer = combineReducers({ reicpes });

export default rootReducer;
