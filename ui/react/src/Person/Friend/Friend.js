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
      <Popup trigger={viewFriendButton} modal>
        <div className="card">
          <h1 className="card-header bg-info text-white">View</h1>
          <div className="card-body">
            {friendName}
          </div>
        </div>
      </Popup>
      <Popup trigger={editFriendButton} modal>
        <div>
          <label className="mx-2">Edit <span className="font-weight-bold font-italic">{friendName}</span></label>
          <input />
        </div>
      </Popup>
      <Popup trigger={deleteFriendButton} modal isOpen={false}>
        <div className="text-danger text-center">
          <div>Are You sure you want to delete <span className="font-weight-bold font-italic text-primary">{friendName}</span>?</div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger mx-2">Yes</button>
            <button className="btn btn-info mx-2">No</button>
          </div>
        </div>
      </Popup>
      <span className="col-md-3 text-white">{friendName}</span>

    </li>
  )
}

export default friend;