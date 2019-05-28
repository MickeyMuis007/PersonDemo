import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrash);

const tag = (props) => {
  return (
    <li className="row mb-2">
    <button className="b-float btn-primary" data-toggle="tooltip" data-placement="top" title="Edit Tag"><FontAwesomeIcon icon="edit" /></button>
    <button className="b-float btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Tag"><FontAwesomeIcon icon="trash" /></button>
      <span className="col-md-3">{props.tag}</span> 
    </li>
  )
}

export default tag;