import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
import Nav from './Nav/Nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


library.add(faPlus);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }
  

  componentDidMount = () => {
    fetch('http://localhost:3001/person')
      .then(result => {
        if(result.ok)
          return result.json();
        return result;
      })
      .then(result => {
        const personsTake10 = result.slice(1, 10);
        const persons = result;
        this.setState({
          persons: personsTake10
        })
        
      })
      .catch(err => console.log(err));
  }

  render() {
    let person = null;

    person = (
      <div>
        {this.state.persons.map((person) => {
          return <Person
            person={person}
            key={person.id}
          />
        })}
      </div>
    );
    

    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <h1>Person Demo</h1>
        </header>
        <div>
          {person}
        </div>
        <button
         onClick={this.getPersons}
         className="float" data-toggle="tooltip" data-placement="top" title="Add Person">
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
    );
  }
}

export default App;
