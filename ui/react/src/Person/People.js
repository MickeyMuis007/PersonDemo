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
  state = {
    persons: [],
    popularTags: [],
    popularFriends: [],
    filterSelection: '/person',
    isLoading: false
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
    fetch(`http://localhost:3001/${value}`)
      .then(result => {
        if (result.ok) {
          const updateState = data => this.setState({...data, isLoading: false});

          return result.json().then(result => {
            if (value.includes('person')) {
              console.log('persons')
              updateState({persons: result.slice(1, 100)})
            }
            else if (value.includes('popular-tag')) {
              console.log('popular tags')
              console.log(result);
              updateState({ popularTags: result });
            }
            else if (value.includes('most-popular-friend')) {
              console.log('Most popular friend');
              console.log(result);
              updateState({ popularFriends: result, });
            }
          });
        }
      });

    this.setState({
      filterSelection: value
    })
  }

  render() {
    const { persons, popularFriends, popularTags, filterSelection} = this.state;

    const person = (
      <div>
        {persons.map((person) => {
          return <Person
            person={person}
            filter={this.state.filterSelection}
            key={person.id}
          />
        })}
      </div>
    );

    const popularFriendsList = (
      <div>
        {popularFriends.map((friend) => {
          return <PopularFriend
            friend={friend}
            key={friend.friend_name}
          />
        })}
      </div>
    );

    const popularTagsList = (
      <div>
        {popularTags.map((tag, index) => {
          return <PopularTag
            popularTag={tag}
            key={tag.gender}
          />
        })}
      </div>
    )
    const personAddButton = (
      <LinkContainer to={'/add-person'}>
        <button
          onClick={this.getPersons}
          className="float" data-toggle="tooltip" data-placement="top" title="Add Person">
          <FontAwesomeIcon icon="plus" />
        </button>
      </LinkContainer>
    )
    // const setClasses = (matcher) => classNames({
    //   'btn': true,
    //   'btn-secondary': true,
    //   active: filterSelection === matcher
    // });
    return (
      <div className="container-fluid">
        <h1 className="text-center">People</h1>
        <div className="d-flex justify-content-center">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className={filterSelection === '/person' ? 'btn btn-secondary active' : 'btn btn-secondary'}>
              <input type="radio" name="options" id="option1" autoComplete="off"
                onClick={() => this.filter('person')} /> All</label>
            <label className={filterSelection === '/popular-tag?gender=female' ? 'btn btn-secondary active' : 'btn btn-secondary'}>
              <input type="radio" name="options" id="option2" autoComplete="off"
                onClick={() => this.filter('popular-tag?gender=female')} /> Most Popular Female Tags</label>
            <label className={filterSelection === '/popular-tag?gender=male' ? 'btn btn-secondary active' : 'btn btn-secondary'}>
              <input type="radio" name="options" id="option2" autoComplete="off"
                onClick={() => this.filter('popular-tag?gender=male')} /> Most Popular Male Tags</label>
            <label className={filterSelection === '/most-popular-friend' ? 'btn btn-secondary active' : 'btn btn-secondary'}>
              <input type="radio" name="options" id="option3" autoComplete="off"
                onClick={() => this.filter('most-popular-friend')} /> Most Popular Friends</label>
          </div>
        </div>

        {this.state.isLoading && 
          <div className="text-center">
            <Spinner animation="grow" />
          </div>
        }

        <div>
          {person}
          {popularFriendsList}
          {popularTagsList}
        </div>
        {persons.length > 0 && personAddButton}
      </div>
    );
  }
}

export default People;
