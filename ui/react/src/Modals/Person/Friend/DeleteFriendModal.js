import React, { Component } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faEye);

class DeleteFriendModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {
      show: false,
      name: props ? props.name || '' : '',
      deleting: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  delete() {
    this.setState({ deleting: true })
    setTimeout(() => {
      this.setState({ show: false, deleting: false });
    }, 3000)
  }

  render() {

    let deletingLoader = <Button variant="danger" onClick={this.delete}>Yes</Button>;
    if (this.state.deleting) {
      deletingLoader = (<Button variant="danger" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Deleting <span className="text-info">{this.state.name}</span>...
    </Button>);
    }

    return (
      <>
        <button onClick={this.handleShow} className="b-float btn-danger" data-toggle="tooltip" data-placement="top"
          title="Delete Friend"><FontAwesomeIcon icon="trash" /></button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete <span className="text-info">{this.state.name}</span>:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 className="text-danger">Are you sure you want to delete <span className="text-info">{this.state.name}</span>?</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" disabled={this.state.deleting} onClick={this.handleClose}>No</Button>
            {deletingLoader}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default DeleteFriendModal