import {combineReducers} from 'redux';
import languages from './LanguageReducer';
import countries from './CountryReducer';

/**
 * using ES6 shorthand property names
 */
const rootReducer = combineReducers({
  languages,
  countries
});

export default rootReducer;
