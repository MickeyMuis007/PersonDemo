import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Person from './Person';
import PopularFriend from './Popular Friend/PopularFriend';
import PopularTag from './Popular Tag/PopularTag';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'react-bootstrap';

library.add(faPlus);

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      popularTags: [],
      popularFriends: [],
      filterSelection: '/person',
      isLoading: false
    }
  }


  componentDidMount = () => {
    this.setState({
      persons: [],
      popularTags: [],
      popularFriends: [],
      isLoading: true
    });
    fetch('http://localhost:3001/person')
      .then(result => {
        if (result.ok) {
          return result.json().then(result => {
            const persons = result.slice(1, 100);
            this.setState({
              persons: persons,
              isLoading: false
            })
          });
        }
      })
      .catch(err => console.log(err));
  }

  filter = (value) => {
    console.log('filter', value);
    this.setState({
      persons: [],
      popularTags: [],
      popularFriends: [],
      isLoading: true
    });
    fetch(`http://localhost:3001${value}`)
      .then(result => {
        if (result.ok) {
          return result.json().then(result => {
            if (value.includes('/person')) {
              console.log('persons')
              this.setState({
                persons: result.slice(1, 100),
                popularTags: [],
                popularFriends: [],
                isLoading: false
              });
            } else if (value.includes('/popular-tag')) {
              console.log('popular tags')
              console.log(result);
              this.setState({
                persons: [],
                popularTags: result,
                popularFriends: [],
                isLoading: false
              });
            } else if (value.includes('/most-popular-friend')) {
              console.log('Most popular friend');
              console.log(result);
              this.setState({
                persons: [],
                popularTags: [],
                popularFriends: result,
                isLoading: false
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
            key={tag.gender}
          />
        })}
      </div>
    )

    let personAddButton = null;
    if (this.state.persons.length > 0) {
      personAddButton = (
        <LinkContainer to={'/add-person'}>
          <button
            onClick={this.getPersons}
            className="float" data-toggle="tooltip" data-placement="top" title="Add Person">
            <FontAwesomeIcon icon="plus" />
          </button>
        </LinkContainer>
      )
    }

    let loader = null;
    if (this.state.isLoading) {
      loader = <Spinner animation="grow" />
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
                onClick={() => this.filter('/most-popular-friend')} /> Most Popular Friends</label>
          </div>
        </div>
        <div className="text-center">
          {loader}
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
