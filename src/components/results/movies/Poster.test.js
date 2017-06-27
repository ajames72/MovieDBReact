import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Poster from './Poster';

describe('Poster', () => {

  const url = '/path/to/image/src.png';
  const altText = 'image alt text';
  const noop = () => {

  }

  describe('component structure', () => {
    it('should contain an image element', () => {
      let poster = shallow(<Poster src={url} alt={altText} hideFullSizePoster={noop} />);

      expect(poster.find('img').length).toEqual(1);
    });

    /**
     * @TODO: Test Click event
     */
  });

  describe('component props', () => {
    it('should have a src attribute', () => {
      let poster = mount(<Poster src={url} alt={altText} hideFullSizePoster={noop} />);

      expect(poster.props().src).toEqual(url);
    });

    it('should have an alt text attribute', () => {
      let poster = mount(<Poster src={url} alt={altText} hideFullSizePoster={noop} />);

      expect(poster.props().alt).toEqual(altText);
    });
  });
});
