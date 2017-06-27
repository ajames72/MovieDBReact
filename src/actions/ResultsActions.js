import * as types from './ActionTypes';

export function setPosterAttributes(_posterAttrs) {
  //-------------------------------------------------------------------//
  //
  // @TODO:
  // We need to set this device specific to get correct poster size
  //
  // Possibly get device through config on app start,
  // then pass as a property of  posterAttrs
  //
  //-------------------------------------------------------------------//
  let posterAttrs = Object.assign({}, {'src': _posterAttrs.src.replace('w92', 'w300'), 'alt': _posterAttrs.alt});

  return {
    type: types.RESULTS_DISPLAY_POSTER, posterAttrs
  };
}
