import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Starboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentUser: this.props.currentUser,
            users: null
        }
    }
    componentDidMount=()=> {
        this.setState({
        currentUser: this.props.currentUser,
        users: this.props.users
        })
    }

    renderStars=(num)=> {
        const arr=[];
        if(num > 0) {
            for(let i=0; i<num; i++) {
                arr.push(
                    <img src='favicon.ico' alt="star"></img>
                )
            }
        }
        else arr.push("No stars Yet ;)");
        return arr;
    }

    renderTasks = () =>{
        const usersArr = [];
        this.state.users.forEach(user=> {
            let stars=0;
            user.tasks.forEach(task=> {
                return task.resources[0].isCompeleted? stars = stars+1 : stars;
            })
            usersArr.push(
                <div className="starboard-user">
                    <h3>{user.name}</h3>
                    <div>
                        {this.renderStars(stars)}
                    </div>
                </div>
            );
        })
        return usersArr;
    }

    render() {
        return (
            <div className="starboard-container">
                <h1>Star board</h1>
                {this.state.users? this.renderTasks() : <div>Loading...</div>}
                {this.state.currentUser? "" : <Redirect to="/login"/>}
            </div>
        )
    }
}


export default Starboard;