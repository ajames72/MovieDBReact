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
import {ROUTE_PATH_PEOPLE} from '../../../RoutePaths';

const PeoplePage = SearchPage();

function mapStateToProps(state, ownProps) {
  return {
    sectionTitle: "People Search",
    path: ROUTE_PATH_PEOPLE
  };
}

function matchDispatchToProps(dispatch) {
  return {
    searchAction: bindActionCreators(searchActions.peopleSearch, dispatch),
    clearSearchResults: bindActionCreators(searchActions.clearSearchResults, dispatch),
    setSectionAttributes: bindActionCreators(searchActions.setSectionAttributes, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(PeoplePage);
