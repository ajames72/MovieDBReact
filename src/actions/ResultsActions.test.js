import expect from 'expect';
import * as types from './ActionTypes';
import * as ResultsActions from './ResultsActions';

describe('set poster attrs', () => {
  const mockPosterData = {
    src: 'path/to/image/w92/imageSrc.png',
    alt: 'my image alt text'
  };

  const expectedPosterData = {
    src: 'path/to/image/w300/imageSrc.png',
    alt: 'my image alt text'
  };

  const expectedAction = {
    type: types.RESULTS_DISPLAY_POSTER, posterAttrs: expectedPosterData
  };

  it('should create an action to set the poster attributes', () => {
    expect(ResultsActions.setPosterAttributes(mockPosterData)).toEqual(expectedAction);
  });
});
