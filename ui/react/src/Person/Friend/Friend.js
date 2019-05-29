import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';

library.add(faEdit, faTrash, faEye);
const friend = (props) => {
  const friendName = props.friend ? props.friend.name || '' : '';

  const viewFriendButton = (<button className="b-float btn-info" data-toggle="tooltip" data-placement="top"
    title="View Friend"><FontAwesomeIcon icon="eye" /></button>);

  const editFriendButton = (<button className="b-float btn-primary" data-toggle="tooltip" data-placement="top"
    title="Edit Friend"><FontAwesomeIcon icon="edit" /></button>);

  const deleteFriendButton = (<button className="b-float btn-danger" data-toggle="tooltip" data-placement="top"
    title="Delete Friend"><FontAwesomeIcon icon="trash" /></button>);

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