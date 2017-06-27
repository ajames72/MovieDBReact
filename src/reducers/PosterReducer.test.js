import expect from 'expect';
import * as types from '../actions/ActionTypes';
import * as ResultsActions from '../actions/ResultsActions';
import * as TestData from '../../test/TestData';
import PosterReducer from './PosterReducer';

describe('PosterReducer', () => {
  const initialState = { };

  it('should return the initial state', () => {
    expect(PosterReducer(initialState, {})).toEqual(initialState);
  });
});
