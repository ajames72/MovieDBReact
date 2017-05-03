/**
 * @file
 * @description
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../../actions/SearchActions';
import SearchOptionLanguages from './SearchOptionLanguages';
import SearchOptionCountries from './SearchOptionCountries';

class SearchOptions extends React.Component {
  constructor(props, context) {
   super(props, context);
  }

  componentDidMount() {
  }

  render() {
    const {languages} = this.props;
    const {countries} = this.props;

    return (
      <div className="col-lg-12">
        <div className="tmdb-searchoptions">
          <div className="tmdb-searchoption">
            <label htmlFor="tmdb-search-option-adult">Adult</label>
            <input type="checkbox" className="tmdb-searchoption__field" id="tmdb-search-option-adult" name="tmdb-search-option-adult" />
          </div>
          <div className="tmdb-searchoption" id="langOpts">
            <label htmlFor="tmdb-search-option-language">Language</label>
            <SearchOptionLanguages languages={languages} />
          </div>
          <div className="tmdb-searchoption" id="regionOpts">
            <label htmlFor="tmdb-search-option-region">Region</label>
            <SearchOptionCountries countries={countries} />
          </div>
          <div className="tmdb-searchoption">
            <label htmlFor="tmdb-search-option-year">Year</label>
            <input type="number" className="tmdb-searchoption__field" id="tmdb-search-option-year" name="tmdb-search-option-year" max="2017" />
          </div>
          <div className="tmdb-searchoption">
            <label htmlFor="tmdb-search-option-primary">Primary Release Year</label>
            <input type="number" className="tmdb-searchoption__field" id="tmdb-search-option-primary" name="tmdb-search-option-primary" max="2017" />
          </div>
        </div>
      </div>
    );
  }
}

SearchOptions.propTypes = {
  languages: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  //Access data in the Redux store
  //state.languages property is defined in the reducer (rootReducer)
  return {
    languages: state.languages,
    countries: state.countries
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

//export default SearchOptions;
const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(SearchOptions);
