import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navvbar extends Component {
    render() {
        return (
            <div className="navbar">
              <ul className="navbar-ul">
                  <Link to='/'>
                    <li>homepage</li>
                  </Link>
                  <Link to='/calendar'>
                    <li>Calendar</li>
                  </Link>
                  <Link to='/starboard'>
                    <li>Star Board</li>
                  </Link>
                  <Link to='/logout'>
                    <li>Log Out</li>
                  </Link>
              </ul>
            </div>
        )
    }
}

export default Navvbar;
