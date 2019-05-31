import React, { Component } from 'react';
import { Modal, Button, Form, InputGroup, FormControl, Spinner } from 'react-bootstrap';
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
    this.handleNameChange = this.handleNameChange.bind(this);

    this.state = {
      show: false,
      saving: false,
      model: {
      }
    };
  }

  handleClose() {
    if (!this.state.saving)
      this.setState({ show: false });
  }

  save() {
    this.setState({ saving: true });
    setTimeout(() => {
      this.setState({ show: false, saving: false });
    }, 3000);
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleNameChange(event) {
    this.setState({model : { name: event.target.value }});
  }

  render() {

    let saveButton = <Button disabled={!this.state.model.name} variant="success" onClick={this.save} type="submit">Save Changes</Button>;
    if (this.state.saving) {
      saveButton = (<Button variant="success" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Saving <span className="text-primary">{this.state.model.name}</span>
      </Button>);
    }

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
                  onChange={this.handleNameChange}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button disabled={this.state.saving} variant="secondary" onClick={this.handleClose}>Close</Button>
              {saveButton}
            </Modal.Footer>
          </Modal>
        </Form>
      </>
    );
  }
}

export default AddFriendModal