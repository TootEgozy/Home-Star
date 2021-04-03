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
        console.log("in homepage");
        console.log(this.state.currentUser);
        if(this.state.currentUser === null) {
            <Redirect to="/login">
            </Redirect>
        }
    }
    render() {
        return (
            <div>
                {this.state.currentUser===null? <Redirect to="/login"/> : ""}
                <h1>HomePage</h1>   
            </div>
        )
    }
}
export default Homepage;