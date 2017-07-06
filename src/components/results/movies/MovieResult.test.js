import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import MovieResult from './MovieResult';
import Movie from './Movie';
import MovieTitle from './MovieTitle';

describe('MovieResult', () => {
  describe('component structure', () => {

    const props = {
      path: 'path/to/image.png',
      title: 'test title',
      onclick: sinon.stub()
    };

    it('should contain a Movie component', () => {
      let movieResult = shallow(<MovieResult {...props} />);
      expect(movieResult.contains(<Movie src={props.path} alt={props.title}/>));
    });

    it('should contain a MovieTitle component', () => {
      let movieResult = shallow(<MovieResult {...props} />);
      expect(movieResult.contains(<MovieTitle title={props.title} />));
    });

    it('should call the onclick event', () => {
      let movieResult = shallow(<MovieResult {...props} />);
      movieResult.find('.tmdb-movie').at(0).simulate('click');
      expect(props.onclick.calledOnce).toBeTruthy();
    });
  });

  describe('component props', () => {
    const props = {
      path: 'path/to/image.png',
      title: 'test title',
      onclick: () => {
        //noop
      }
    };

    it('should have an image src prop', () => {
      let movieResult = mount(<MovieResult {...props} />);
      expect(movieResult.props().path).toEqual('path/to/image.png');
    });

    it('should have a title prop', () => {
      let movieResult = mount(<MovieResult {...props} />);
      expect(movieResult.props().title).toEqual('test title');
    });
  });
});
