import { expect } from 'chai';
import reducer from './recipe-reducers';

describe('Recipe Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
        isFetching: false,
        entries: []
      }
    );
  });

  it('should handle REQUEST_RECIPES', () => {
    expect(reducer(undefined, {
      type: 'REQUEST_RECIPES'
    })).to.deep.equal({
        isFetching: true,
        entries: []
      }
    );
  });

  it('should handle RECEIVE_RECIPES', () => {
    expect(reducer({
      entries: [{ title: 'a recipe' }],
      receivedAt: '00000000',
      isFetching: false
    }, {
      type: 'RECEIVE_RECIPES'
    })).to.deep.equal({
        isFetching: false,
        entries: [
          { title: 'a recipe' }
        ],
        receivedAt: '00000000'
      }
    );
  });
});