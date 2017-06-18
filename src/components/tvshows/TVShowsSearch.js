/**
 * @file TVShowsSearch component
 * @description Presentation component for TVShows Search landing page
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

import Search from '../common/search/Search';
import Results from '../results/Results';
import {ROUTE_PATH_TVSHOWS} from '../../RoutePaths';

class TVShowsSearch extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.clearSearchResults();
    //The properties are going to be displayed in more than 1 component
    //so we'll have to call an action to set the attributes
    this.props.actions.setSectionAttributes({'title': 'TV Shows Search', 'section': ROUTE_PATH_TVSHOWS});
  }

  render() {

    const {actions} = this.props;

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Search search={actions.tvShowSearch}/>
          <Results />
        </div>
      </div>
    );
  }
}

TVShowsSearch.propTypes = {
  actions: PropTypes.object.isRequired
};

export default TVShowsSearch;
