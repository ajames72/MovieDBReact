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
    let query = event.target.value;
    this.setState({query: query});
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
    //Pass search action depending on movies, tv show, etc
    this.props.search(this.state);
  }

  render() {

    const {languages, countries, sectionAttributes} = this.props;

    return (
      <div className="row">
        <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h4>{sectionAttributes.title}</h4>
        </header>
        <SearchBox onSubmit={this.search} onChange={this.setSearchTerm}/>
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
  countries: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
  sectionAttributes: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  //Access data in the Redux store
  //state.languages property is defined in the reducer (rootReducer)
  return {
    languages: state.languages,
    countries: state.countries,
    sectionAttributes: state.sectionAttributes
  };
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(Search);
