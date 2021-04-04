import React, { Component } from 'react'
import { Redirect } from 'react-router';

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
            <div>
                <h1>HomePage</h1>
                {this.state.currentUser? "" : <Redirect to="/login"/>}
            </div>
        )
    }
}
export default Homepage;