import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: '32' },
      { name: 'Mani', age: '42' },
      { name: 'Mar', age: '22' }
    ],
    otherState: 'some other value'
  };


  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // This is bad code ---> personsState.persons[0].name = 'Nektarios';
    this.setState({
      persons: [
        { name: newName, age: '32' },
        { name: 'Mani', age: '42' },
        { name: 'Marianthe', age: '22' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Nektarios", age: '32' },
        { name: event.target.value, age: '42' },
        { name: 'Marianthe', age: '22' }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, i'm a React App!!!</h1>
        <p>This is really working!</p>
        <button
          style = {style}
          onClick={() => this.switchNameHandler("Nektarios!")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Banousi')}
          changed={this.nameChangedHandler} > My hobby is: Motorbikes</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m a React app!!!'))
  }
}

export default App;





