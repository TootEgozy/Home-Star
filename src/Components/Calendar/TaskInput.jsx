import Moment from 'moment';
import React from 'react';

//should get currentTask, currentUser, users
class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            taskTitle: this.props.currentTask.title,
            taskStart: this.props.currentTask.start,
            userId: null,
            assignerId: this.props.CurrentUser.id
        }
    }

    setTitle = (e) => {
        this.setState({taskTitle: e.target.value})
    }

    setDate = (e) => {
        this.setState({taskStart: e.target.value})
    }

    setUser = (e) => {
        this.setState({userId: e.target.value})
    }
    render() {
        return (
            <div>
               <div className="Inpur"></div>
            </div>
        )
    }
}

export default TaskInput;
