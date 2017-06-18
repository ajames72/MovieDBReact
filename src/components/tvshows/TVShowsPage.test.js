import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import TVShowsPage from './TVShowsPage';
import * as TestData from '../../../test/TestData';

describe('TVShowsPage', () => {
  //Fake Store and Middleware
  const middlewares = [ thunk ];
  const mockStore = configureStore(middlewares);
  const initialState = {
    languages: TestData.languages,
    countries: TestData.countries,
    config: TestData.tmdb_configuration,
    searchResults: {results: []},
    sectionAttributes: {
      'section': "tvshows",
      'title': "TV Show Search"
    }
  };

  describe('Component structure', () => {
    let tvShowPage;

    beforeEach(() => {
      let store = mockStore(initialState);

      tvShowPage = mount(
        <Provider store={store}>
          <TVShowsPage />
        </Provider>
      );
    });

    it('should display the search box', () => {
      expect(tvShowPage.find('.tmdb-searchbox').length).toEqual(1);
    });

    it('shoud; display the search options', () => {
      expect(tvShowPage.find('.tmdb-searchoptions').length).toEqual(1);
    });

    /* @TODO - test results component */
  });

  describe('Component props', () => {
    let tvShowPage;

    beforeEach(() => {
      let store = mockStore(initialState);

      tvShowPage = mount(
        <Provider store={store}>
          <TVShowsPage />
        </Provider>
      );
    });

    it('should have actions props', () => {
      expect(tvShowPage.find('TVShowsSearch').props().actions).toExist();
    });
  });
});
