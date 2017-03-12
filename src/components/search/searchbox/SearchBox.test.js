import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('SearchBox', function() {
  it('should contain a SearchBox wrapper', function() {
    let searchBox = shallow(<SearchBox />);
    expect(searchBox.find('.tmdb-searchbox').length).toEqual(1);
  });

  it('should contain an input field', function() {
    let searchBox = shallow(<SearchBox />);
    expect(searchBox.find('#searchbox').length).toEqual(1);
  });

  it('should contain a submit button', function() {
    let searchBox = shallow(<SearchBox />);
    expect(searchBox.find('#submit').length).toEqual(1);
  });
});
