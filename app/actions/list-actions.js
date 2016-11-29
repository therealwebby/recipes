export const REQUEST_RECIPES = 'REQUEST_RECIPES';
function requestRecipes() {
  return {
    type: REQUEST_RECIPES
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receiveRecipes(json) {
  return {
    type: RECEIVE_POSTS,
    recipes: json.slice(0),
    receivedAt: Date.now()
  }
}

export function fetchRecipes() {
  return function (dispatch) {
    dispatch(requestRecipes());

    return fetch('/api/recipes')
    .then(response => response.json())
    .then(json => {
      dispatch(receiveRecipes(json));
    });
  }
}

