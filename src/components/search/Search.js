/**
 * @file Search Component
 * @description Displays the Search box and Search Results
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SearchBox from './searchbox/SearchBox';
import SearchOptions from './searchoptions/SearchOptions';
import * as searchActions from '../../actions/SearchActions';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.setAdultFlag = this.setAdultFlag.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
    this.setYear = this.setYear.bind(this);
    this.setPrimaryReleaseYear = this.setPrimaryReleaseYear.bind(this);

    this.state = {
      include_adult: false,
      region: 'any',
      language: 'any',
      year: '',
      primary_release_year: ''
    };
  }

  setSearchTerm(event) {
    let searchTerm = event.target.value;
    this.setState({searchTerm: searchTerm});
  }

  setAdultFlag(event) {
    let adult = event.target.value;
    this.setState({adult: adult});
  }

  setCountry(event) {
    let country = event.target.value;
    this.setState({region: country});
  }

  setLanguage(event) {
    let language = event.target.value;
    this.setState({language: language});
  }

  setYear(event) {
    let year = event.target.value;
    this.setState({year: year});
  }

  setPrimaryReleaseYear(event) {
    let primaryReleaseYear = event.target.value;
    this.setState({primary_release_year: primaryReleaseYear});
  }

  search(event) {
    event.preventDefault();
    console.log('sendSearch', this.state);
  }

  render() {

    const {languages, countries} = this.props;

    return (
      <div className="row">
        <SearchBox onSubmit={this.search} onChange={this.setSearchTerm}/>
        <header className="col-lg-8 col-lg-offset-1">
          <h4>Search Options</h4>
        </header>
        <SearchOptions
          languages={languages}
          countries={countries}
          setAdultFlag={this.setAdultFlag}
          setCountry={this.setCountry}
          setLanguage={this.setLanguage}
          setYear={this.setYear}
          setPrimaryReleaseYear={this.setPrimaryReleaseYear}
        />
      </div>
    );
  }
}

Search.propTypes = {
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

const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(Search);
