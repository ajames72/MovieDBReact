/**
 * @file
 * @description
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import SearchOptionLanguages from './SearchOptionLanguages';
import SearchOptionCountries from './SearchOptionCountries';

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      languages,
      countries,
      setAdultFlag,
      setCountry,
      setLanguage,
      setYear,
      setPrimaryReleaseYear
    } = this.props;

    return (
      <div className="col-lg-12">
        <div className="tmdb-searchoptions">
          <div className="tmdb-searchoption__tr">
            <div className="tmdb-searchoption__td">
              <label htmlFor="tmdb-search-option-adult">Adult</label>
            </div>
            <div className="tmdb-searchoption__td">
              <label htmlFor="tmdb-search-option-language">Language</label>
            </div>
            <div className="tmdb-searchoption__td">
              <label htmlFor="tmdb-search-option-region">Region</label>
            </div>
            <div className="tmdb-searchoption__td">
              <label htmlFor="tmdb-search-option-year">Year</label>
            </div>
            <div className="tmdb-searchoption__td">
              <label htmlFor="tmdb-search-option-primary">Primary Release Year</label>
            </div>
          </div>
          <div className="tmdb-searchoption__tr">
            <div className="tmdb-searchoption__td">
              <input type="checkbox" className="tmdb-searchoption__field" id="tmdb-search-option-adult" name="tmdb-search-option-adult" onChange={setAdultFlag} />
            </div>
            <div className="tmdb-searchoption__td" id="langOpts">
              <SearchOptionLanguages languages={languages} setLanguage={setLanguage} />
            </div>
            <div className="tmdb-searchoption__td" id="regionOpts">
              <SearchOptionCountries countries={countries} setCountry={setCountry} />
            </div>
            <div className="tmdb-searchoption__td">
              <input type="number" className="tmdb-searchoption__field" id="tmdb-search-option-year" name="tmdb-search-option-year" max="2017" onChange={setYear} />
            </div>
            <div className="tmdb-searchoption__td">
              <input type="number" className="tmdb-searchoption__field" id="tmdb-search-option-primary" name="tmdb-search-option-primary" max="2017" onChange={setPrimaryReleaseYear} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchOptions.defaultProps = {
  languages: [],
  countries: []
}

SearchOptions.propTypes = {
  languages: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
  setAdultFlag: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  setPrimaryReleaseYear: PropTypes.func.isRequired
};

export default SearchOptions;
