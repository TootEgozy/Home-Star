import React, { Component } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import Moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import TaskInput from './TaskInput';

const localizer = momentLocalizer(Moment);

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            currentUser: this.props.currentUser,
            tasks: [],
            currentTask: {},
            showInputFiled: false,
        } 
    }

    componentDidMount = async() => {
        await this.setTasksList();

    }

    cancelTaskInput = () => {
        this.setState({
            currentTask: {},
            showInputFiled: false
        });
    }

    saveTaskInputAndSendUp=(newTask, newTaskId)=>{
        console.log(newTask);
        let matchingTaskIndex;
        let matchingUserId;

        
        //this.state.users.find(user=> {
        //     return user.tasks.find(task=> {
        //         return task.resources[0].id === newTask.resources[0].id)
        //     });
        // })
        // console.log(newTask);
        // console.log(matchingTask);
    }
    
    // data-massaging: getting tasks, converting task's 
    // string dates to Moment objects, setting into state's tasks arr.
    setTasksList = () => {
        
        let tasksArr = [];

        if(this.state.users) {
            this.state.users.forEach(user=> {
                user.tasks.forEach(task=> {
                    let newTask = {};
                    newTask.start = Moment(task.start,"DD/MM/YYYY h:mmA");
                    newTask.end = Moment(task.end, "DD/MM/YYYY h:mmA");
                    newTask.title = task.title;
                    newTask.resources = task.resources;

                    if(newTask.resources[0].isCompeleted) {
                        newTask.title = task.title.concat("-Done!");
                    }

                    tasksArr.push(newTask);
                })
            })
            //console.log(tasksArr);
            this.setState({tasks: tasksArr});
        }
 
    }

    clickedOnTask=(e)=> {
        // console.log(e.resources[0])
        console.log(this.state.currentUser);
        this.setState({
            currentTask:e,
            showInputFiled: true
        })
    }
   

    MyCalendar = () => {
        return (
            <div className="calendar-container-div">
                <Calendar
                    selectable={true}
                    localizer={localizer}
                    events={this.state.tasks}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="month"
                    style={{height: 500}}
                    onSelectEvent={e=> this.clickedOnTask(e)}
                />
            </div>
        )
    }
    
    inputTask = () => {

        return (
        <TaskInput
        users={this.state.users}
        currentTask={this.state.currentTask}
        currentUser={this.state.currentUser}
        cancelCallback={this.cancelTaskInput}
        />)
    }

    render() {
        return (
            <div>
                <h1>Calendar</h1>
                {this.state.tasks? this.MyCalendar() : <div>loading...</div>}
                {this.state.showInputFiled? this.inputTask() : <></>}
                {<Link to='/newtask'>Create new task</Link>}
                {this.state.currentUser? "" : <Redirect to="/login"/>} 
            </div>
        )
    }
}

export default CalendarContainer;
