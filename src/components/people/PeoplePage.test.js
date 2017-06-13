import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import PeoplePage from './PeoplePage';
import * as TestData from '../../../test/TestData';

describe('PeoplePage', () => {
  //Fake Store and Middleware
  const middlewares = [ thunk ];
  const mockStore = configureStore(middlewares);
  const initialState = {
    languages: TestData.languages,
    countries: TestData.countries,
    config: TestData.tmdb_configuration,
    searchResults: {results: []}
  };

  describe('Component structure', () => {
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

    it('shoud; display the search options', () => {
      expect(peoplePage.find('.tmdb-searchoptions').length).toEqual(1);
    });

    /* @TODO - test results component */
  });

  describe('Component props', () => {
    let peoplePage;

    beforeEach(() => {
      let store = mockStore(initialState);

      peoplePage = mount(
        <Provider store={store}>
          <PeoplePage />
        </Provider>
      );
    });

    it('should have actions props', () => {
      expect(peoplePage.find('PeopleSearch').props().actions).toExist();
    });
  });
});
