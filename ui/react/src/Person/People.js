import React, { Component } from 'react';
import Person from './Person';
import PopularFriend from './Popular Friend/PopularFriend';
import PopularTag from './Popular Tag/PopularTag';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus);

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      popularTags: [],
      popularFriends: [],
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
            if (value.includes('/person')) {
              console.log('persons')
              this.setState({
                persons: result.slice(1, 10),
                popularTags: [],
                popularFriends: []
              });
            } else if (value.includes('/popular-tag')) {
              console.log('popular tags')
              this.setState({
                persons: [],
                popularTags: result,
                popularFriends: []
              });
            } else if (value.includes('/most-popular-friend')) {
              console.log('Most popular friend');
              console.log(result);
              this.setState({
                persons: [],
                popularTags: [],
                popularFriends: result
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
    const person = (
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

    const popularFriends = (
      <div>
        {this.state.popularFriends.map((friend) => {
          return <PopularFriend
            friend={friend}
            key={friend.friend_name}
          />
        })}
      </div>
    );

    const popularTags = (
      <div>
        {this.state.popularTags.map((tag, index) => {
          return <PopularTag
            popularTag={tag}
            key={index}
          />
        })}
      </div>
    )

    let personAddButton = null;
    if (this.state.persons.length > 0) {
      personAddButton = (
        <button
          onClick={this.getPersons}
          className="float" data-toggle="tooltip" data-placement="top" title="Add Person">
          <FontAwesomeIcon icon="plus" />
        </button>
      )
    }

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
          {popularFriends}
          {popularTags}
        </div>
        {personAddButton}
      </div>
    );
  }
}

export default People;
