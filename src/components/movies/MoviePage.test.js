import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import MoviePage from './MoviePage';
import * as TestData from '../../../test/TestData';

describe('MoviePage', () => {

  //Fake Store and Middleware
  const middlewares = [ thunk ];
  const mockStore = configureStore(middlewares);
  const initialState = {
    languages: TestData.languages,
    countries: TestData.countries,
    config: TestData.tmdb_configuration,
    searchResults: {results: []}
  };

  describe('Component Structure', () => {

    let moviePage;

    beforeEach(() => {
      let store = mockStore(initialState);

      moviePage = mount(
        <Provider store={store}>
          <MoviePage />
        </Provider>
      );
    });

    it('should display the search box', () => {
      expect(moviePage.find('.tmdb-searchbox').length).toEqual(1);
    });

    it('should display the search options', () => {
      expect(moviePage.find('.tmdb-searchoptions').length).toEqual(1);
    });
  });

  describe('Component props', () => {

    let moviePage;

    beforeEach(() => {

      let store = mockStore(initialState);

      moviePage = mount(
        <Provider store={store}>
          <MoviePage />
        </Provider>
      );
    });

    it('should have actions props', () => {
      expect(moviePage.find('MovieSearch').props().actions).toExist();
    });
  });

});
