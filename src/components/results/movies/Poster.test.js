import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Poster from './Poster';

describe('Poster', () => {

  const url = '/path/to/image/src.png';
  const altText = 'image alt text';

  describe('component structure', () => {
    it('should contain an image element', () => {
      let poster = shallow(<Poster src={url} alt={altText} />);

      expect(poster.find('img').length).toEqual(1);
    });
  });

  describe('component props', () => {
    it('should have a src attribute', () => {
      let poster = shallow(<Poster src={url} alt={altText} />);

      expect(poster.props().src).toEqual(url);
    });

    it('should have an alt text attribute', () => {
      let poster = shallow(<Poster src={url} alt={altText} />);

      expect(poster.props().alt).toEqual(altText);
    });
  });
});
