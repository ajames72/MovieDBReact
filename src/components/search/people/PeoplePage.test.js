import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import PeoplePage from './PeoplePage';
import * as TestData from '../../../../test/TestData';

describe('PeoplePage', () => {

  //Fake Store and Middleware
  const middlewares = [ thunk ];
  const mockStore = configureStore(middlewares);
  const initialState = {
    languages: TestData.languages,
    countries: TestData.countries,
    config: TestData.tmdb_configuration,
    searchResults: {results: []},
    sectionAttributes: {
      'section': "people",
      'title': "People Search"
    }
  };

  describe('Component Structure', () => {

    let peoplePage;

    beforeEach(() => {
      let store = mockStore(initialState);

      peoplePage = mount(
        <Provider store={store}>
          <PeoplePage />
        </Provider>
      );
    });

    it('should display the search box', () => {
      expect(peoplePage.find('.tmdb-searchbox').length).toEqual(1);
    });

    it('should display the search options', () => {
      expect(peoplePage.find('.tmdb-searchoptions').length).toEqual(1);
    });
  });
});
