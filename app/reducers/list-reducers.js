import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/list-actions';

function recipes(
  state = {
    isFetching: false,
    items: []
  }, action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        recipes: action.recipes.slice(0),
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export default recipes;