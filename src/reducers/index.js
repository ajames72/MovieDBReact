import {combineReducers} from 'redux';
import config from './TMDBApiConfigurationReducer';
import languages from './LanguageReducer';
import countries from './CountryReducer';
import movies from './MovieSearchReducer';

/**
 * using ES6 shorthand property names
 */
const rootReducer = combineReducers({
  config,
  languages,
  countries,
  movies
});

export default rootReducer;
