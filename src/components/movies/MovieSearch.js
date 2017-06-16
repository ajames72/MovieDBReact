/**
 * @file MovieSearch component
 * @description Presentation component for Movie Search landing page
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

import Search from '../common/search/Search';
import Results from '../results/Results';
import {ROUTE_PATH_MOVIES} from '../../RoutePaths';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //The properties are going to be displayed in more than 1 component
    //so we'll have to call an action to set the attributes
    this.props.actions.setSectionAttributes({'title': 'Movie Search', 'section': ROUTE_PATH_MOVIES});
  }

  render() {
    const {actions} = this.props;

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Search search={actions.movieSearch}/>
        <Results />
        </div>
      </div>
    );
  }
}


MovieSearch.propTypes = {
  actions: PropTypes.object.isRequired
};

export default MovieSearch;
