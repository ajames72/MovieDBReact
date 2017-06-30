import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import Header from './Header';

describe('Header component', () => {

  const attributes = {
    'section': "movies",
    'title': "Movie Search"
  };

  //Fake Store and Middleware
  const middlewares = [ thunk ];
  const mockStore = configureStore(middlewares);
  const initialState = {
    sectionAttributes: attributes
  };

  describe('Component Structure', () => {
    let header;

    beforeEach(() => {
      let store = mockStore(initialState);

      header = mount(
        <Provider store={store}>
          <Header />
        </Provider>
      );
    });

    it('should display a navbar', () => {
      expect(header.find('nav').length).toBe(1);
    });

    it('should have links', () => {
      expect(header.find('Link').length).toBe(4);
    });

    it('should have a selected menu item', () => {
      expect(header.find('li').filter('.active').length).toBe(1);
    });

  });

  describe('Component Props', () => {

  });
});
