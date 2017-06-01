import expect from 'expect';
import * as types from '../actions/ActionTypes';
import * as SearchActions from '../actions/SearchActions';
import * as TestData from '../../test/TestData';
import MovieSearchReducer from './MovieSearchReducer';

const initialState = {
  results: []
};

describe('MovieSearchReducer', () => {
  it('should return the initial state', () => {
    expect(MovieSearchReducer(initialState, {})).toEqual(initialState);
  });

  it('should create results when passed MOVIE_SEARCH action', () => {
    const action = SearchActions.movieSearchSuccess(TestData.results);
    expect(MovieSearchReducer(initialState, action)).toEqual(TestData.results);
  });
});
