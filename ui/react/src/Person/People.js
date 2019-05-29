import React, { Component } from 'react';
import Person from './Person';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus);

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }


  componentDidMount = () => {
    fetch('http://localhost:3001/person')
      .then(result => {
        if (result.ok)
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
        <div>
          <h1>Person Demo</h1>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> All</label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off" /> Most Popular Female Tags</label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off" /> Most Popular Male Tags</label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autoComplete="off" /> Most Popular Friend</label>
          </div>
        </div>
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

export default People;
