/**
 * @file Search component
 * @description Parent class Presentation component for Search landing pages
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

import Search from '../common/search/Search';
import Results from '../results/Results';
import {ROUTE_PATH_MOVIES} from '../../RoutePaths';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.sectionTitle;
    this.path;
  }

  componentDidMount() {
    this.props.clearSearchResults();
    //The properties are going to be displayed in more than 1 component
    //so we'll have to call an action to set the attributes
    this.props.setSectionAttributes({'title': this.props.sectionTitle, 'section': this.props.path});
  }

  setSectionTitle(title) {
    this.sectionTitle = title;
  }

  getSectionTitle() {
    return this.sectionTitle;
  }

  render() {
    const {searchAction} = this.props;

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Search search={searchAction}/>
        <Results />
        </div>
      </div>
    );
  }
}


SearchPage.propTypes = {
  searchAction: PropTypes.func.isRequired,
  clearSearchResults: PropTypes.func.isRequired,
  setSectionAttributes: PropTypes.func.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default SearchPage;
