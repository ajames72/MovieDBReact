/**
 * @file Movie Page Component
 * @description Controller component for the Movie Search section
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SearchPage from '../SearchPage';
import * as searchActions from '../../../actions/SearchActions';
import {ROUTE_PATH_MOVIES} from '../../../RoutePaths';

const MoviePage = SearchPage();

function mapStateToProps(state, ownProps) {
  return {
    sectionTitle: "Movie Search test",
    path: ROUTE_PATH_MOVIES
  };
}

function matchDispatchToProps(dispatch) {
  return {
    searchAction: bindActionCreators(searchActions.movieSearch, dispatch),
    clearSearchResults: bindActionCreators(searchActions.clearSearchResults, dispatch),
    setSectionAttributes: bindActionCreators(searchActions.setSectionAttributes, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(MoviePage);
