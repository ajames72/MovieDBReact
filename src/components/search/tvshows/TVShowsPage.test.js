import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import TVShowsPage from './TVShowsPage';
import * as TestData from '../../../../test/TestData';

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
      'title': "TV Shows Search"
    }
  };

  describe('Component Structure', () => {

    let tvShowsPage;

    beforeEach(() => {
      let store = mockStore(initialState);

      tvShowsPage = mount(
        <Provider store={store}>
          <TVShowsPage />
        </Provider>
      );
    });

    it('should display the search box', () => {
      expect(tvShowsPage.find('.tmdb-searchbox').length).toEqual(1);
    });

    it('should display the search options', () => {
      expect(tvShowsPage.find('.tmdb-searchoptions').length).toEqual(1);
    });
  });

  describe('Component props', () => {

    let tvShowsPage;

    beforeEach(() => {

      let store = mockStore(initialState);

      tvShowsPage = mount(
        <Provider store={store}>
          <TVShowsPage />
        </Provider>
      );
    });
    /*
    it('should have actions props', () => {
      expect(moviePage.find('MovieSearch').props().actions).toExist();
    });
    */
  });

});
