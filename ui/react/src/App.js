import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus);

class App extends Component {
  state = {
    persons: [
      {
        id: 'kjds-adjie-jfds-dsa1', gender: 'male', name: 'Max',
        friends:
          [{ id: 'sdf-sdf-ljdi-adkjf-1', name: 'Mike' },
          { id: 'sdf-sdf-ljdi-adkjf-2', name: 'John' },
          { id: 'sdf-sdf-ljdi-adkjf-3', name: 'Adam' }],
        tags: ['jids', 'jkdd', 'dkie', 'jids']
      },
      {
        id: 'kjds-adjie-jfds-dsa2', gender: 'male', name: 'Manu',
        friends:
          [{ id: 'dkjdkl-jfid-ajidfk-1', name: 'Amy' },
          { id: 'dkjdkl-jfid-ajidfk-2', name: 'Jamie' },
          { id: 'dkjdkl-jfid-ajidfk-3', name: 'Ben' }],
        tags: ['jids', 'dddd', 'fadd']
      },
      {
        id: 'kjds-adjie-jfds-dsa3', gender: 'female', name: 'Stephanie',
        friends: [
          { id: 'dkj-dijf-dsi-sdi-31', name: 'Graham' },
          { id: 'dkj-dijf-dsi-sdi-32', name: 'Jonty' }
        ],
        tags: ['jids', 'jkdd', 'dkie']
      }
    ]
  }

  getPersons = () => {
    console.log('Here');
    fetch('http://localhost:3001/person')
      .then(result => {
        console.log('1st', result.ok)
        if(result.ok)
          return result.json();
        return result;
      })
      .then(result => {
        this.setState({
          persons: result
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
