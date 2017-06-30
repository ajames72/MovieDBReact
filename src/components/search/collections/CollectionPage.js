/**
 * @file Collection Page Component
 * @description Controller component for the Collection Search section
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SearchPage from '../SearchPage';
import * as searchActions from '../../../actions/SearchActions';
import {ROUTE_PATH_COLLECTIONS} from '../../../RoutePaths';

const CollectionPage = SearchPage();

function mapStateToProps(state, ownProps) {
  return {
    sectionTitle: "Collection Search",
    path: ROUTE_PATH_COLLECTIONS
  };
}

function matchDispatchToProps(dispatch) {
  return {
    searchAction: bindActionCreators(searchActions.collectionSearch, dispatch),
    clearSearchResults: bindActionCreators(searchActions.clearSearchResults, dispatch),
    setSectionAttributes: bindActionCreators(searchActions.setSectionAttributes, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(CollectionPage);
