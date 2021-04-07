import React, { Component } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import Moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Redirect } from 'react-router';
import events from './mockupEvents';

const mockUserData =  [
    {
      id:"a",
      name: "Yonni",
      avatar: "./user1.png",
      tasks: [
          {
          title:"Swipe Living room",
          start: Moment("07/05/2021 10:00PM", "DD/MM/YYYY h:mmA"),
          end: Moment("07/05/2021 10:00PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "a", userId: "a", assignerId: "b", isCompeleted: false}],
        },
          {
          title:"Wash dishes",
          start: Moment("08/05/2021 11:20PM", "DD/MM/YYYY h:mmA"),
          end: Moment("08/05/2021 11:20PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "b", userId: "a", assignerId: "c", isCompeleted: true}],
        }
      ],
    },
    {
      id:"b",
      name: "Noa",
      avatar: "./user2.png",
      tasks: [
          {
              "title": "Clean Fridge",
              "start": Moment("02/05/2021 17:30PM", "DD/MM/YYYY h:mmA"),
              "end": Moment("02/05/2021 17:30PM", "DD/MM/YYYY h:mmA"),
            //   resources:[{taskId: "c", userId: "b", assignerId: "c", isCompeleted: true}],
          },
          {
              "title": "Walk dog",
              "start": Moment("04/05/2021 14:30PM", "DD/MM/YYYY h:mmA"),
              "end": Moment("04/05/2021 14:30PM", "DD/MM/YYYY h:mmA"),
            //   resources:[{taskId: "d", userId: "b", assignerId: "e", isCompeleted: true}],
          }
      ],
    },
    {
      id:"c",
      name: "Mary",
      avatar: "./user3.png",
      tasks: [
        {
          "title": "Hang laundry",
          "start": Moment("01/05/2021 13:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("01/05/2021 13:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "e", userId: "c", assignerId: "d", isCompeleted: false}],
      }
      ],
    },
    {
      id:"d",
      name: "Daniel",
      avatar: "./user4.png",
      tasks: [
        {
          "title": "Wash floor",
          "start": Moment("11/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("11/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "i", userId: "d", assignerId: "c", isCompeleted: true}],
      },
      {
          "title": "Walk cat",
          "start": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "j", userId: "d", assignerId: "e", isCompeleted: true}],
      },
      {
          "title": "Scrub stove",
          "start": Moment("08/05/2021 10:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("08/05/2021 10:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "k", userId: "d", assignerId: "a", isCompeleted: true}],
      }
      ],
    },
    {
      id:"e",
      name: "Roy",
      avatar: "./user5.png",
      tasks: [
        {
          "title": "Wash floor",
          "start": Moment("02/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("02/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "l", userId: "e", assignerId: "c", isCompeleted: true}],
      },
      {
          "title": "Walk cat",
          "start": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "m", userId: "e", assignerId: "e", isCompeleted: true}],
      },
      {
          "title": "Scrub stove",
          "start": Moment("03/04/2021 10:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("03/04/2021 10:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "n", userId: "e", assignerId: "a", isCompeleted: true}],
      }
      ],
    },
  ];

//let tasksArr = [];

const stamEvents = [
    {
      'title': 'Test Event A',
      'allDay': true,
      'start': Moment("12/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
      'end': Moment("12/04/2021 14:30PM", "DD/MM/YYYY h:mmA")
    },
    {
      'title': 'Test Event B',
      'start': Moment("11/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
      'end': Moment("11/04/2021 14:30PM", "DD/MM/YYYY h:mmA")
    }];


const stamEvents2 = [
    {
        title:"Swipe Living room",
        start: Moment("07/05/2021 10:00PM", "DD/MM/YYYY h:mmA"),
        end: Moment("07/05/2021 10:00PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "a", userId: "a", assignerId: "b", isCompeleted: false}],
      },
        {
        title:"Wash dishes",
        start: Moment("08/05/2021 11:20PM", "DD/MM/YYYY h:mmA"),
        end: Moment("08/05/2021 11:20PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "b", userId: "a", assignerId: "c", isCompeleted: true}],
      },
      {
        "title": "Clean Fridge",
        "start": Moment("02/05/2021 17:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("02/05/2021 17:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "c", userId: "b", assignerId: "c", isCompeleted: true}],
    },
    {
        "title": "Walk dog",
        "start": Moment("04/05/2021 14:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("04/05/2021 14:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "d", userId: "b", assignerId: "e", isCompeleted: true}],
    },
    {
        "title": "Hang laundry",
        "start": Moment("01/05/2021 13:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("01/05/2021 13:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "e", userId: "c", assignerId: "d", isCompeleted: false}],
    },
    {
        "title": "Wash floor",
        "start": Moment("11/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("11/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "i", userId: "d", assignerId: "c", isCompeleted: true}],
    },
    {
        "title": "Walk cat",
        "start": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "j", userId: "d", assignerId: "e", isCompeleted: true}],
    },
    {
        "title": "Scrub stove",
        "start": Moment("10/04/2021 10:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("10/04/2021 10:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "k", userId: "d", assignerId: "a", isCompeleted: true}],
    }
    
];

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
            saveChanges: false
        } 
    }

    componentDidMount = async() => {
        await this.setTasksList();
        // console.log(this.state.tasks);
        // console.log(events);
        // console.log(events[0].start);
        // await this.setState({tasks: events});

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

                    tasksArr.push(newTask);
                })
            })
            console.log(tasksArr);
            this.setState({tasks: tasksArr});
        }


        //for(let i=0; i < mockUserData.length; i++) {
        //    tasksArr = tasksArr.concat(mockUserData[i].tasks);
        //}

        
    }

    MyCalendar = () => {
        return (
            <div className="calendar-container-div">
                <Calendar
                    localizer={localizer}
                    events={this.state.tasks}
                    //events={stamEvents2}
                    //events={tasksArr}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="week"
                    style={{height: 500}}
                    //onSelectEvent={event => console.log(event.resource)}
                    //onSelectSlot={slot=> console.log(slot.startAccessor)}
                />
            </div>
        )
    }
    
    inputTask = () => {
        return (
        <this.inputTask
        currentTask={this.state.currentTask}
        />)
    }

    render() {
        return (
            <div>
                <h1>Calendar</h1>
                {this.state.tasks? this.MyCalendar() : <div>loading...</div>}
                {this.state.showInputFiled? this.inputTask() : <></>}
                {this.state.currentUser? "" : <Redirect to="/login"/>} 
            </div>
        )
    }
}

export default CalendarContainer;
