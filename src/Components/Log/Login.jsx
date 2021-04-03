import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentUser:this.props.currentUser,
            users: this.props.users,
            createNewUser: false,
        }
    }

    // if there is a current user sent from App's state,
    // re-direct the user to the homepage
    // else:

    // show an input filed.
    // if the user loges in, without remember me, set the user as
    // current user in App's state.
    // if the user loggs in with remember me, save this to local storage, 
    // and set the user as current user in app's state.

    // if the user choses to create a new user, direct into create new user page
    componentDidMount = () => {
        console.log("mounted");
        console.log(this.state.users);
        if(!this.state.currentUser===null) {
            <Redirect to='/homepage'></Redirect>
        }
    }

    componentDidUpdate=()=> {
        // console.log(this.state);
    }
    
    setUser = async(e) => {
        await this.setState({currentUser: e.target.value});
        console.log(this.state.currentUser);
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-card">
                    <h1>Login</h1>
                    <div className="droplist-container">
                        <select onChange={e=> this.setUser(e)}>
                            {this.state.users.map(user => {
                                return <option key={user.name} value={user.id}>{user.name}</option>
                            })}
                        </select>
                    </div>
                    <Link to='newuser'>
                        link
                    </Link>
                </div>

            </div>
        )
    }
}

export default Login;
