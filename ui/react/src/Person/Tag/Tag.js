import React from 'react';
import EditTagModal from '../../Modals/Person/Tags/EditTagModal';
import DeleteTagModal from '../../Modals/Person/Tags/DeleteTagModal';


const tag = (props) => {
  const editTagButton = <EditTagModal tag={props.tag} />;
  const deleteTagButton = <DeleteTagModal tag={props.tag} />
  return (
    <li className="row mb-2 text-center text-primary">
      {editTagButton}
      {deleteTagButton}
      <span className="col-md-3 text-white">{props.tag}</span>
    </li>
  )
}

export default tag;