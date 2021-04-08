import Moment from 'moment';
import React from 'react';

//should get currentTask, currentUser, users
class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            users: this.props.users,
            currentTask: this.props.currentTask,
            currentUser: this.props.currentUser,
            taskTitle: this.props.currentTask.title,
            taskStart: this.props.currentTask.start,
            taskId: this.counter +1,
            userId: null,
            assignerId: this.props.currentUser.id,
            isCompeleted: this.props.currentTask.resources[0].isCompeleted
        }
    }
    componentDidUpdate=()=> {
        console.log(this.state);
    }

    setTitle = (e) => {
        this.setState({taskTitle: e.target.value})
    }

    setDate = (e) => {
        this.setState({taskStart: e.target.value})
    }

    setUserId = (e) => {
        // const user = this.state.users.find(user=> {
        //     return (user.id === e.target.value)
        // })
        // console.log(user);
        this.setState({userId: e.target.value})
    }

    setTaskCompelete=()=>{
        this.state.isCompeleted? this.setState({isCompeleted: false}) : this.setState({isCompeleted: true});
    }

    cancelUpdate=()=> {
        this.setState({
            users: this.props.users,
            currentTask: this.props.currentTask,
            currentUser: this.props.currentUser,
            taskTitle: this.props.currentTask.title,
            taskStart: this.props.currentTask.start,
            taskId: this.counter +1,
            userId: null,
            assignerId: this.props.currentUser.id
        })

    this.props.cancelCallback();
    }


    render() {
        return (
            <div>
               <div className="task-title-input">
                   <span>Title:</span>
                   <input 
                   type="text" 
                   value={this.state.taskTitle}
                   onChange={this.setTitle}
                   />
               </div>
               <div className="task-user-input">
                   <span>Assign to:</span>
                   <select onChange={this.setUserId}>
                    {this.state.users.map(user=> {
                        return (<option 
                            key={user.id}
                            value={user.id}
                            >{user.name}
                            </option>)
                    })}
                    </select>
               </div>
               <div className="task-isCompeleted-input">
                   <span>Task compeleted?</span>
                   <input 
                   type="checkbox" 
                   onClick={this.setTaskCompelete}
                   checked={this.state.isCompeleted}
                   ></input>
               </div>
               <button 
               className="task-input-cancel-button"
               onClick={this.cancelUpdate}
               >
                Cancel
               </button>
               <button 
               className="task-input-save-button"
               onClick={this.setAppState}
               >
                Save
               </button>
            </div>
        )
    }
}

export default TaskInput;
