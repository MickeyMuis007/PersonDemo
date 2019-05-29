import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';

library.add(faEdit, faTrash);

const tag = (props) => {
  const editTagButton = (
    <button className="b-float btn-primary" data-toggle="tooltip" data-placement="top" title="Edit Tag">
      <FontAwesomeIcon icon="edit" /></button>
  );
  const deleteTagButton = (
    <button className="b-float btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Tag"><FontAwesomeIcon icon="trash" /></button>
  )
  return (
    <li className="row mb-2 text-center text-primary">
    <Popup trigger={editTagButton} modal>
        <div>
          <label className="mx-2">Edit <span className="font-weight-bold font-italic">{props.tag}</span></label>
          <input />
        </div>
      </Popup>
      <Popup trigger={deleteTagButton} modal isOpen={false}>
        <div className="text-danger text-center">
          <div>Are You sure you want to delete <span className="font-weight-bold font-italic text-primary">{props.tag}</span>?</div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger mx-2">Yes</button>
            <button className="btn btn-info mx-2">No</button>
          </div>
        </div>
      </Popup>
      <span className="col-md-3 text-white">{props.tag}</span>
    </li>
  )
}

export default tag;