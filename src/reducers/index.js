import {combineReducers} from 'redux';
import config from './TMDBApiConfigurationReducer';
import languages from './LanguageReducer';
import countries from './CountryReducer';
import searchResults from './SearchReducer';
import sectionAttributes from './SectionAttributesReducer';

/**
 * using ES6 shorthand property names
 */
const rootReducer = combineReducers({
  config,
  languages,
  countries,
  searchResults,
  sectionAttributes
});

export default rootReducer;
