import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import list from './list-reducers'

const rootReducer = combineReducers({list});

export default rootReducer;
