import {combineReducers} from 'redux';
import languages from './SearchReducer';

/**
 * using ES6 shorthand property names
 */
const rootReducer = combineReducers({
  languages
});

export default rootReducer;
