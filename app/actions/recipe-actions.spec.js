import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import chai, { expect } from 'chai';
import shallowDeepEqual from 'chai-shallow-deep-equal';
import * as actions from './recipe-actions.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

chai.use(shallowDeepEqual);

describe('Recipe Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  
  it('creates RECEIVE_RECIPES when fetching recipes is done', () => {
    nock('http://localhost:3000/').get('/api/recipes')
      .reply('200', [{ title: 'a recipe' }]);
    
    const store = mockStore({ list: {} });
    const expectedActions = [
      { type: actions.REQUEST_RECIPES },
      {
        type: actions.RECEIVE_RECIPES,
        entries: [
          {
            title: "a recipe"
          }
        ]
      }
    ];
    
    return store.dispatch(actions.fetchRecipes()).then(() => {
      expect(store.getActions()).to.shallowDeepEqual(expectedActions);
    })
  });
});