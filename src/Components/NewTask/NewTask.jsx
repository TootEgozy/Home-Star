import React, { Component } from 'react'
import { Redirect } from 'react-router'

class NewTask extends Component {
    constructor(props){
        super(props);
        this.counter = 0;
        this.state = {
            users: this.props.users,
            assignerId: this.props.currentUser.id,
            taskTitle: "",
            taskStart: "",
            taskId: this.counter +1,
            userId: null,
            isCompeleted: false,
            done: false,
        }
    }
    render() {
        return (
            <div>
                 {this.state.currentUser? "" : <Redirect to="/login"/>}
                 {this.state.done? "" : <Redirect to="/calendar"/>}
            </div>
        )
    }
}


export default NewTask;
