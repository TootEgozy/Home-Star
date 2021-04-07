import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentUser: this.props.currentUser
        }
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <div className="homepage-container">
                <div className="homepage-card">
                    <h1>Home Star</h1>
                    <ul className="homepage-ul">
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
                    {this.state.currentUser? "" : <Redirect to="/login"/>}
                </div>
            </div>
        )
    }
}
export default Homepage;