import {combineReducers} from 'redux';
import languages from './LanguageReducer';
import countries from './CountryReducer';
import movies from './MovieSearchReducer';

/**
 * using ES6 shorthand property names
 */
const rootReducer = combineReducers({
  languages,
  countries,
  movies
});

export default rootReducer;
