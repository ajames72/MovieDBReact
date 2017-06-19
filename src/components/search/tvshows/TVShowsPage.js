/**
 * @file Movie Page Component
 * @description Controller component for the Movie Search section
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TVShowsSearch from './TVShowsSearch';
import * as searchActions from '../../../actions/SearchActions';
import {ROUTE_PATH_TVSHOWS} from '../../../RoutePaths';

class TVShowsPage extends React.Component {
  constructor(props) {
    super(props);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    sectionTitle: "TV Shows Search",
    path: ROUTE_PATH_TVSHOWS
  };
}

function matchDispatchToProps(dispatch) {
  return {
    searchAction: bindActionCreators(searchActions.tvShowSearch, dispatch),
    clearSearchResults: bindActionCreators(searchActions.clearSearchResults, dispatch),
    setSectionAttributes: bindActionCreators(searchActions.setSectionAttributes, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(TVShowsSearch);
