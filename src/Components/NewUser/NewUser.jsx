import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            counter: 0,
            id: -1,
            name: null,
            nameInput: null,
            showCard: false,
            avatar: "./user3.png",
            finished: false,
        }
    }
   
    componentDidMount = () => {
        this.setState({id: this.state.counter});
    }

    setTempName = (e)=> {
        const name = e.target.parentElement.children[1].value;
        this.setState({nameInput: name});
    }

    setUserInfo = (e) => {
        const name = this.state.nameInput;
        const bool = (name === undefined || name === null || name === "" || name === "." || name.length < 2 || name.slice(0,1).match(/^[0-9]/))? false : true;
        if(bool) {
            this.setState({name: this.state.nameInput});
        }
    }

    setAvatar = (e) => {
        this.setState({avatar: e.target.value});
    }

    showCard = () => {
        if (this.state.name) {
            this.setState({showCard: true});
        }
    }

    submit = (e) => {
        this.props.addNewUser(this.state.id, this.state.name, this.state.avatar);
        this.setState({counter: this.state.counter +1, finished: true});
    }

    cancelSubmit = (e) => {
        this.setState({showCard: false});
    }

    showInputOrCard = () => {
        if(this.state.showCard) {
            return (
                <div className="new-user-show-card">
                    <h3>Your info:</h3>
                    <div className="name">name: {this.state.name}</div>
                    <img src={this.state.avatar} alt="avatar"></img>
                    <div>Create new profile?</div>
                    <div className="new-user-card-buttons">
                        <button onClick={e=> this.cancelSubmit(e)}>cancel</button>
                        <button onClick={e=> this.submit(e)}>submit</button>
                    </div>
                </div>
            )
        }
        else return (
            <div className="create-new-user-container">
                <div className="create-new-user">
                    <h1>New User</h1>
                    <div className="new-user-name-input">
                        <h3>Enter your name</h3>
                        <input 
                        type="text" 
                        value={this.state.nameInput}
                        onChange={e=>this.setTempName(e)}
                        >
                        </input>
                        <button onClick={e=>this.setUserInfo(e)}>
                            Set Name
                        </button>
                        {this.showForbiddenMessage()}
                    </div>
                    <div className="new-user-avatar-input">
                        <h3>Enter an image url</h3>
                        <input 
                        type="text"
                        value={this.state.avatar}
                        onChange={e=>this.setAvatar(e)}
                        >
                        </input>
                    </div>
                    <button className="create-new-user-button"
                    onClick={e=>this.showCard(e)}
                    >
                    Create
                    </button>
                </div>
            </div>
        );
    }
    
    showForbiddenMessage =() => {
        const name = this.state.nameInput;
        if(name && this.state.showCard === false) {
            if(name === "" || name === "." || name.length < 2 || name.slice(0,1).match(/^[0-9]/)) {
                return (<div className="forbidden-message">Name must be at leat 2 characters long and start with a letter</div>);
            }
        }
    }

    render() {
        return (
            <div>
                {this.showInputOrCard()}
                {this.state.finished? <Redirect to='/'/> : <></>}
            </div>
        )
    }
}

export default NewUser;
