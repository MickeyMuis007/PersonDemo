import React from 'react';
import './PopularFriend.css';

const popularFriend = (props) => {
  const friend = props.friend;

  return (
    <div className="container text-uppercase text-center popular-friend-container">
      <div className="text-success font-weight-bold">
        Popular Friend: {friend.friend_name}
      </div>
      <div>Main Friend: {friend.main_friend}</div>
      <div>Total: {friend.total}</div>
    </div>
  )
}

export default popularFriend;