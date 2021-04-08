import './App.css';
import CalendarContainer from './Components/Calendar/CalendarContainer';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Log/Login';
import Navvbar from './Components/Navbar/Navvbar';
import NewUser from './Components/NewUser/NewUser';
import Starboard from './Components/Starboard/Starboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogOut from './Components/Log/LogOut';
import React from 'react';
import usersMockupData from './mockupUsers';
import NewTask from './Components/NewTask/NewTask';

const mockupUsers = usersMockupData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state=
    {
      currentUser: null,
      users:[],
      startingDate:{year:null,month:null, weekDay:null, day:null},
      currentDate:{year:null, month:null, weekDay:null, day:null}, 
    }
  }

  // check local storage:
  // does a starting date exists? if so, set it to state
  // if not, create it.
  // does a "rememberMe: true" && user exist?
  // if so, set it to state and go to homepage
  // if not, go to login page
  componentDidMount = async() => {
    //if there is a saved current user
    //!!!!!!this is not the right syntax
    if(localStorage.currentUser) {
      //if there is a current user + date
      if (localStorage.startingDate) {
        const currentUserFromStorage=localStorage.getItem("currentUser");      
        this.setState({
          currentUser: currentUserFromStorage
        });
      }
      //if there is a current user but no starting date
      else {
        const date = new Date();
        const day = date.getDate();
        const weekDay = date.getDay()+1;
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        
        this.setState({
          startingDate:{year:year, month:month, weekDay:weekDay, day:day},
          currentDate:{year:year, month:month, weekDay:weekDay, day:day}, 
        })
        localStorage.setItem("starting date",`${this.state.currentDate}`);
      }
    }
    await this.setState({users: mockupUsers});
    console.log(this.state.users);

  }

  
  // a passed method to get the user from a dropList, and set it to this state
  // as current user.
  logIn = (userId) => {
    const selectedUser = this.state.users.find(user => {
      return (user.id === userId);
    });
    this.setState({currentUser: selectedUser});
  }

  addNewUser = (userId, userName, userAvatar) => {
    const newUser = 
    {
      id: userId,
      name: userName,
      avatar: userAvatar,
      tasks: [],
      projects: []
    }
    const newUsers = [...this.state.users];
    newUsers.push(newUser);
    this.setState({currentUser: newUser, users: newUsers});
  }

  addNewTask = (userId, task) => {
   //create duplicate of states users array,
   //splice out of it the old user, push in the user with the 
   //new task.
   //update state with the new users array.

    const userIndex = this.state.users.findIndex(function(user){
      return user.id===userId
    });

    const tempUsers = [...this.state.users];

    const updatedUser = tempUsers[userIndex];

    updatedUser.tasks.push(task);

    tempUsers.splice(userIndex, 1);
    tempUsers.push(updatedUser);

    this.setState({users: tempUsers});

  }

  render () {
    // console.log("current user: ");
    // console.log(this.state.currentUser);
    // console.log("users:");
    // console.log(this.state.users);
    return (
      <Router>
        <div>
          <Navvbar currentUser={this.state.currentUser}/>
          <Switch>
          <Route path='/' exact component={Homepage}>
              <Homepage currentUser={this.state.currentUser}/>
            </Route>
            <Route path='/login' exact component={Login}>
              <Login 
              logIn={this.logIn}
              currentUser={this.state.currentUser? this.state.currentUser : "newUser"}
              users={mockupUsers}              
              />
            </Route>
            <Route path='/calendar' exact component={CalendarContainer}>
              <CalendarContainer
              users={this.state.users}
              currentUser={this.state.currentUser}
              />
            </Route>
            <Route path='/starboard' exact component={Starboard}>
              <Starboard
              currentUser={this.state.currentUser}
              users={this.state.users}
              />
            </Route>
            <Route path='/newuser' exact component={NewUser}>
              <NewUser 
              addNewUser={this.addNewUser}
              />
            </Route>
            <Route path='/logout' exact component={LogOut}>
              <LogOut/>
            </Route>
            <Route path='/newtask' exact component={NewTask}>
              <NewTask
              users={this.state.users}
              addNewTask={this.addNewTask}
              currentUser={this.state.currentUser}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
    }
}

export default App;

