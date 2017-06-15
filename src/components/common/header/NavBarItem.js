/**
 * @file NavBarItem component
 * @description This component is responsible for the display of a Navigation Item that will be displayed in the NavBar component
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

//Helper function to add active class to list item
function isActive(active) {
  if(active)
    return "active";
}

const NavBarItem = ({label, link, active}) => {

  return (
    <li className={isActive(active)}>
      <Link to={link}>{label}</Link>
    </li>
  );
};

NavBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default NavBarItem;
