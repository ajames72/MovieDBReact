import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {

  const attributes = {
    'section': "movies",
    'title': "Movie Search"
  };

  describe('Component structure', () => {

    it('should display the NavBar', () => {
      const navBar = shallow(<NavBar sectionAttributes={attributes} />);

      expect(navBar.find('.navbar').length).toBe(1);
    });

    it('should have 5 menu items', () => {
      const navBar = mount(<NavBar sectionAttributes={attributes} />);

      expect(navBar.find('li').length).toBe(5);
    });

    it('should display an active menu item', () => {
      const navBar = mount(<NavBar sectionAttributes={attributes} />);

      expect(navBar.find('li').filter('.active').length).toBe(1);
    });
  });

  describe('Component properties', () => {
    it('should contain the section attributes', () => {
      const navBar = mount(<NavBar sectionAttributes={attributes} />);

      expect(navBar.props().sectionAttributes).toEqual(attributes);
    });
  });
});
