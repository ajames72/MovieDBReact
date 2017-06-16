import expect from 'expect';
import * as types from '../actions/ActionTypes';
import * as SearchActions from '../actions/SearchActions';
import * as TestData from '../../test/TestData';
import SearchReducer from './SearchReducer';

const initialState = {
  results: []
};

describe('SearchReducer', () => {
  it('should return the initial state', () => {
    expect(SearchReducer(initialState, {})).toEqual(initialState);
  });

  it('should create results when passed MOVIE_SEARCH action', () => {
    const action = SearchActions.movieSearchSuccess(TestData.movie_search_action_results);
    expect(SearchReducer(initialState, action)).toEqual(TestData.movie_search_action_results);
  });

  it('should create results when passed PEOPLE_SEARCH action', () => {
    const action = SearchActions.peopleSearchSuccess(TestData.people_search_action_results);
    expect(SearchReducer(initialState, action)).toEqual(TestData.people_search_action_results);
  });

  it('should clear the search results when passed CLEAR_SEARCH_RESULTS action', () => {
    const results = {
      results: []
    };
    const action = SearchActions.clearSearchResults();
    expect(SearchReducer(initialState, action)).toEqual(results);
  });
});
