import fetch from 'isomorphic-fetch';

export const REQUEST_RECIPES = 'REQUEST_RECIPES';
function requestRecipes() {
  return {
    type: REQUEST_RECIPES
  }
}

export const RECEIVE_RECIPES = 'RECEIVE_POSTS';
function receiveRecipes(json) {
  return {
    type: RECEIVE_RECIPES,
    entries: json.slice(0),
    receivedAt: Date.now()
  }
}

export function fetchRecipes() {
  return function (dispatch) {
    dispatch(requestRecipes());
  
    return fetch('http://localhost:3000/api/recipes').then(response => response.json())
      .then(json => {
        dispatch(receiveRecipes(json));
      });
  }
}

