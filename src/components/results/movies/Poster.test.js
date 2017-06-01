import React from 'react';
import expect from 'expect';
import { shallow, render } from 'enzyme';
import Poster from './Poster';

describe('Poster', () => {
  describe('component structure', () => {

    const url = '/path/to/image/src.png';
    const altText = 'image alt text';

    it('should contain an image element', () => {
      let poster = shallow(<Poster src={url} alt={altText} />);

      expect(poster.find('img').length).toEqual(1);
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
});
