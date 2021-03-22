import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {


  state = {
    username: "Nektarios"
  }

  changeUsername = (event) => { this.setState({username : event.target.value})}



  render() {
    return (
      <div className="App">
        
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserInput username={this.state.username}  changed={this.changeUsername} />
      </div>
    );
  }
}

export default App;
