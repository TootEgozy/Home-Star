import React, { Component } from 'react'
import { Redirect } from 'react-router'

class NewTask extends Component {
    constructor(props){
        super(props);
        this.counter = 0;
        this.state = {
            users: this.props.users,
            currentUser: this.props.currentUser,
            assignerId: "",
            taskTitle: "",
            taskStart: "",
            taskEnd: "",
            taskId: null,
            userId: null,
            isCompeleted: false,
            done: false,
        }
    }
    componentDidMount=()=>{
        this.setState({
            assignerId: this.state.currentUser.id,
            taskStart: "11/04/2021 17:30PM",
            taskEnd: "11/04/2021 17:30PM",
            taskId: this.counter,
        })

    }

    componentDidUpdate=()=>{
        console.log(this.state);
    }

    setTitle=(e)=> {
        this.setState({taskTitle: e.target.value});
    }
    setUserId=(e)=> {
        this.setState({userId: e.target.value})
    }

    cancelUpdate=()=> {
        this.setState({
            taskTitle: "",
            userId: null
        })
    }

    createNewTask =()=> {
        let newTask= {
            title: this.state.taskTitle,
            start: this.state.taskStart,
            end: this.state.taskEnd,
            resources:[{
                taskId: this.state.taskId, 
                userId: this.state.userId, 
                assignerId: this.state.currentUser.id, 
                isCompeleted: this.state.isCompeleted
            }],
        }
        this.props.addNewTask(this.state.userId, newTask);
        this.counter = this.counter+1;
        this.setState({done: true})
    }

    renderTaskInputs=()=> {
        return (
            <div className="new-task-card">
                <h1>Create new task</h1>
                <div className="task-input-text">
                   <span>Title:</span>
                   <input 
                   type="text" 
                   value={this.state.taskTitle}
                   onChange={this.setTitle}
                   />
               </div>
               <div className="task-input-select">
                   <span>Assign to:</span>
                   <select onChange={this.setUserId}>
                   <option disabled selected value> select user </option>
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
               </div>
               <button 
               className="task-input-cancel-button"
               onClick={this.cancelUpdate}
               >
                Cancel
               </button>
               <button 
               className="task-input-save-button"
               onClick={this.createNewTask}
               >
                Save
               </button>
            </div>
        )
    }


    render() {
        return (
            <div className="new-task-page-container">
                {this.renderTaskInputs()}
                 {this.state.currentUser? "" : <Redirect to="/login"/>}
                 {this.state.done? <Redirect to="/calendar"/>: ""}
            </div>
        )
    }
}


export default NewTask;
