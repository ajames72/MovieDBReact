import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            {
              /*
              <li role="separator" className="divider">
              </li>
              <li>
                <a href="#">One more separated link</a>
              </li>
              */
            }



            { /*
              Will use React-Bootstrap for dropdown menu
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">One more separated link</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
