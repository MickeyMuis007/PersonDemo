import React, { Component } from 'react';
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faEye);

class EditFriendModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.save = this.save.bind(this);

    this.state = {
      show: false,
      name: props ? props.name || '' : ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  save() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <button onClick={this.handleShow} className="b-float btn-primary" data-toggle="tooltip" data-placement="top"
          title="Edit Friend"><FontAwesomeIcon icon="edit" /></button>
        <Form>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit {this.state.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="name">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Update Friend Name"
                  aria-label="Friend Name"
                  aria-describedby="name"
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </>
    );
  }
}

export default EditFriendModal