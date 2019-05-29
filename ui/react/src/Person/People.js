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
      persons: [],
      filterSelection: '/person'
    }
  }


  componentDidMount = () => {
    fetch('http://localhost:3001/person')
      .then(result => {
        if (result.ok) {
          return result.json().then(result => {
            const persons = result.slice(1, 10);
            this.setState({
              persons: persons
            })
          });
        }
      })
      .catch(err => console.log(err));
  }

  filter = (value) => {
    console.log('filter', value);
    fetch(`http://localhost:3001${value}`)
      .then(result => {
        if (result.ok) {
          return result.json().then(result => {
            const persons = result.slice(1, 10);
            console.log(persons);
            if (value.includes('/person')) {
              console.log('persons')
              this.setState({
                persons: persons
              });
            } else if (value.includes('/popular-tag')) {
              console.log('popular tags')
              this.setState({
                persons: [],
                tags: result
              });
            } else if (value.includes('/most-popular-friend')) {
              console.log('Most popular friend');
              this.setState({
                persons: [],
                tags: [],
                friends: []
              });
            }
          });
        }
      })
    this.setState({
      filterSelection: value
    })
  }

  render() {
    let person = null;

    person = (
      <div>
        {this.state.persons.map((person) => {
          return <Person
            person={person}
            filter={this.state.filterSelection}
            key={person.id}
          />
        })}
      </div>
    );

    return (
      <div className="container-fluid">
        <h1 className="text-center">People</h1>
        <div className="d-flex justify-content-center">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className={this.state.filterSelection === '/person' ? 'btn btn-secondary active' : 'btn btn-secondary'}>
              <input type="radio" name="options" id="option1" autoComplete="off"
                onClick={() => this.filter('/person')} /> All</label>
            <label className={this.state.filterSelection === '/popular-tag?gender=female' ? 'btn btn-secondary active' : 'btn btn-secondary'}>
              <input type="radio" name="options" id="option2" autoComplete="off"
                onClick={() => this.filter('/popular-tag?gender=female')} /> Most Popular Female Tags</label>
            <label className={this.state.filterSelection === '/popular-tag?gender=male' ? 'btn btn-secondary active' : 'btn btn-secondary'}>
              <input type="radio" name="options" id="option2" autoComplete="off"
                onClick={() => this.filter('/popular-tag?gender=male')} /> Most Popular Male Tags</label>
            <label className={this.state.filterSelection === '/most-popular-friend' ? 'btn btn-secondary active' : 'btn btn-secondary'}>
              <input type="radio" name="options" id="option3" autoComplete="off"
                onClick={() => this.filter('/most-popular-friend')} /> Most Popular Friend</label>
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
