import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: '32' },
      { name: 'Mani', age: '42' },
      { name: 'Mar', age: '22' }
    ],
    otherState: 'some other value'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // This is bad code ---> personsState.persons[0].name = 'Nektarios';
    setPersonsState({
      persons: [
        { name: 'Nektarios', age: '32' },
        { name: 'Mani', age: '42' },
        { name: 'Marianthe', age: '22' }
      ]
    })
  }

  const [otherState, setOtherState]  = useState("some other value");

  console.log(personsState, otherState)

  return (
    <div className="App">
      <h1>Hi, i'm a React App!!!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobby is: Motorbikes</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m a React app!!!'))
}

export default App;





