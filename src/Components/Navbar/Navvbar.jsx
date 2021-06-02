import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navvbar extends Component {
  constructor(props) {
    super(props);
    this.state={currentUser: this.props.currentUser}
  }
    render() {
        return (
            <div className="navbar">
              <ul className="navbar-ul">
                  <li>
                    <div className="navbar-user">
                      {this.state.currentUser? "Hello "+this.state.currentUser.name : ""}
                    </div>
                  </li>
                  <Link to='/'>
                    <li>Homepage</li>
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
