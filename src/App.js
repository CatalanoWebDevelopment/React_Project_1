import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Parker', age: 27 },
      { name: 'Ross', age: 25 },
      { name: 'Chase', age: 23 }
    ],
    counter: 0
  };

  switchNameHandler = () => {
    if (this.state.counter === this.state.persons.length - 1) {
      this.setState({
        ...this.state,
        counter: 0
      });
    } else {
      this.setState({
        ...this.state,
        counter: this.state.counter += 1
      });
    };
  };

  render() {
    return (
      <div className="App">
       <h1>Hi, I am a React App.</h1>
       <button onClick={() => this.switchNameHandler()}>Switch Name</button>
       <Person name={this.state.persons[this.state.counter].name} age={this.state.persons[this.state.counter].age}>
         My hobbies include: gaming, biking, nightlife, and movies. 
       </Person>
      </div>
    );
  };
};

export default App;