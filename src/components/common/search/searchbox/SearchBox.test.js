import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';
import sinon from 'sinon';

describe('SearchBox', function() {

  describe('component structure', () => {
    const mockOnSubmitProp = () => {};
    const mockOnChangeProp = () => {};

    it('should contain a SearchBox wrapper', function() {
      let searchBox = shallow(<SearchBox onSubmit={mockOnSubmitProp} onChange={mockOnChangeProp} />);
      expect(searchBox.find('.tmdb-searchbox').length).toEqual(1);
    });

    it('should contain an input field', function() {
      let searchBox = shallow(<SearchBox onSubmit={mockOnSubmitProp} onChange={mockOnChangeProp} />);
      expect(searchBox.find('#searchbox').length).toEqual(1);
    });

    it('should contain a submit button', function() {
      let searchBox = shallow(<SearchBox onSubmit={mockOnSubmitProp} onChange={mockOnChangeProp} />);
      expect(searchBox.find('#submit').length).toEqual(1);
    });
  });

  describe('search term input', () => {

  });

  describe('submit event', () => {
    //Simulate onChange event
    //https://github.com/airbnb/enzyme/blob/master/docs/api/ReactWrapper/simulate.md
    const mockOnSubmitProp = sinon.spy();
    const mockOnChangeProp = () => {};

    it('should submit a search term', () => {
      let searchBox = shallow(<SearchBox onSubmit={mockOnSubmitProp} onChange={mockOnChangeProp} />);

      searchBox.find('#submit').simulate('click');

      expect(mockOnSubmitProp.calledOnce).toBeTruthy();
    });
  });
});
