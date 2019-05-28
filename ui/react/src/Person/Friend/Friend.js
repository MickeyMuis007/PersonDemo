import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faTrash, faEye);
const friend = (props) => {
  return (
    <li className="row mb-2">
    <button className="b-float btn-info" data-toggle="tooltip" data-placement="top" title="View Friend"><FontAwesomeIcon icon="eye" /></button>
    <button className="b-float btn-primary" data-toggle="tooltip" data-placement="top" title="Edit Friend"><FontAwesomeIcon icon="edit" /></button>
    <button className="b-float btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Friend"><FontAwesomeIcon icon="trash" /></button>
      <span className="col-md-3">{props.friend.name}</span> 
    </li>
  )
}

export default friend;