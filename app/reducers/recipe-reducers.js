import { combineReducers } from 'redux';
import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actions/recipe-actions';

const initialState = {
  isFetching: false,
  entries: []
};

function recipes(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RECIPES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_RECIPES:
      return Object.assign({}, state, {
        isFetching: false,
        entries: action.entries.slice(0),
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export default recipes;