/**
 * @file NavBar component
 * @description This component is responsible for the display of the Navigation Bar
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';
import NavBarItem from './NavBarItem';
import * as path from '../../../RoutePaths';

const NavBar = ({sectionAttributes}) => {
  return (
    <div className="row">
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          {
            sectionAttributes.section === path.ROUTE_PATH_MOVIES ?
            (<NavBarItem link={path.ROUTE_PATH_MOVIES} label="Movies" active />)
            :
            (<NavBarItem link={path.ROUTE_PATH_MOVIES} label="Movies" />)
          }
          {
            sectionAttributes.section === 'collections' ?
            (<NavBarItem link="collections" label="Collections" active />)
            :
            (<NavBarItem link="collections" label="Collections" />)
          }
          {
            sectionAttributes.section === 'companies' ?
            (<NavBarItem link="companies" label="Companies" active />)
            :
            (<NavBarItem link="companies" label="Companies" />)
          }
          {
            sectionAttributes.section === path.ROUTE_PATH_PEOPLE ?
            (<NavBarItem link={path.ROUTE_PATH_PEOPLE} label="People" active />)
            :
            (<NavBarItem link={path.ROUTE_PATH_PEOPLE} label="People" />)
          }
          {
            sectionAttributes.section === 'tvshows' ?
            (<NavBarItem link="tvshows" label="TV Shows" active />)
            :
            (<NavBarItem link="tvshows" label="TV Shows" />)
          }
        </ul>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  sectionAttributes: PropTypes.object.isRequired
};

export default NavBar;
