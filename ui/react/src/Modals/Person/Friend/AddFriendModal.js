import React, { Component } from 'react';
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faEye);

class AddFriendModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.save = this.save.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  save() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <button onClick={this.handleShow} className="b-float" data-toggle="tooltip" data-placement="top" title="Add Friend">
          <FontAwesomeIcon icon="plus" /></button>
        <Form>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Friend</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="name">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Enter New Friend Name"
                  aria-label="Friend Name"
                  aria-describedby="name"
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
              <Button variant="primary" onClick={this.save} type="submit">
                Save Changes
            </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </>
    );
  }
}

export default AddFriendModal