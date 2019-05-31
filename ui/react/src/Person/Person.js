import React from 'react';
import Friend from './Friend/Friend';
import Tag from './Tag/Tag';
import AddFriendModal from '../Modals/Person/Friend/AddFriendModal';
import './Person.css';
import AddTagModal from '../Modals/Person/Tags/AddTagModal';


const person = (props) => {
  const friendList = props.person.friends;
  const friends = (
    <ul className="">
      {friendList.map((friend, index) => {
        return <Friend
          friend={friend}
          person={props.person}
          key={`${new Date().getTime() + index + friend.id}`}
        />
      })}
    </ul>
  );
  const tagList = props.person.tags;
  let tags;
  if (props.person.tags) {
    tags = (
      <ul>
        {tagList.map((tag, index) => {
          return <Tag
            tag={tag}
            person={props.person}
            key={`${new Date().getTime() + index}`}
          />
        })}
      </ul>
    );
  }

  return (
    <div className="container person-container text-uppercase">
      <div className="d-flex justify-content-center">
        {props.person.name}
      </div>
      <div>Gender: {props.person.gender}</div>
      <div>Friends:</div>
      <div className="container list-container">
        {friends}
        <div className="d-flex justify-content-end">
          <AddFriendModal />
        </div>

      </div>

      <div>Tags:</div>
      <div className="container list-container">
        {tags}
        <div className="d-flex justify-content-end">
          <AddTagModal />
        </div>
      </div>

    </div>
  )
}

export default person;