import expect from 'expect';
import * as types from '../actions/ActionTypes';
import * as SearchActions from '../actions/SearchActions';
import * as TestData from '../../test/TestData';
import PeopleSearchReducer from './PeopleSearchReducer';

const initialState = {
  results: []
};

describe('PeopleSearchReducer', () => {
  it('should return the initial state', () => {
    expect(PeopleSearchReducer(initialState, {})).toEqual(initialState);
  });

  it('should create results when passed PEOPLE_SEARCH action', () => {
    const action = SearchActions.peopleSearchSuccess(TestData.people_search_results);
    expect(PeopleSearchReducer(initialState, action)).toEqual(TestData.people_search_results);
  });
});
