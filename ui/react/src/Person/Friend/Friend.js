import React from 'react';
import ViewFriendModal from '../../Modals/Person/Friend/ViewFriendModal';
import EditFriendModal from '../../Modals/Person/Friend/EditFriendModal';
import DeleteFriendModal from '../../Modals/Person/Friend/DeleteFriendModal';

const friend = (props) => {
  const friendName = props.friend ? props.friend.name || '' : '';
  const person = props.person;

  const viewFriendButton = <ViewFriendModal name={friendName} person={person} />;

  const editFriendButton = <EditFriendModal name={friendName} person={person} />;

  const deleteFriendButton = <DeleteFriendModal name={friendName} person={person} />;

  return (
    <li className="row mb-2 text-primary text-center">
      {viewFriendButton}
      {editFriendButton}
      {deleteFriendButton}
      <span className="col-md-3 text-white">{friendName}</span>

    </li>
  )
}

export default friend;