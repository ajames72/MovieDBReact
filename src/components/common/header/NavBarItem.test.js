import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import NavBarItem from './NavBarItem';

describe('NavBarItem', () => {

  describe('Component structure', () => {

    it('should display the List Item (li) node', () => {
      const navBarItem = shallow(<NavBarItem label="Test label" link="mylink" />);

      expect(navBarItem.find('li').length).toBe(1);
    });

    it('should have a Link element', () => {
      const navBarItem = shallow(<NavBarItem label="Test label" link="mylink" />);

      expect(navBarItem.find('Link').length).toBe(1);
    });

    it('should have an active menu item', () => {
      const navBarItem = shallow(<NavBarItem label="Test label" link="mylink" active />);

      expect(navBarItem.find('.active').length).toBe(1);
    });
  });

  describe('Component props', () => {
    it('should have a label property', () => {
      const navBarItem = mount(<NavBarItem label="Test label" link="mylink" />);

      expect(navBarItem.props().label).toEqual('Test label');
    });

    it('should have a link property', () => {
      const navBarItem = mount(<NavBarItem label="Test label" link="mylink" />);

      expect(navBarItem.props().link).toEqual('mylink');
    });

    it('should have an active property', () => {
      const navBarItem = mount(<NavBarItem label="Test label" link="mylink" active />);

      expect(navBarItem.props().active).toBeTruthy();
    });
  });
});
