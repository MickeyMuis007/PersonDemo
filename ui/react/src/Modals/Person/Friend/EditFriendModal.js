import React, { Component } from 'react';
import { Modal, Button, Form, InputGroup, FormControl, Spinner } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faEye);

class EditFriendModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.save = this.save.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);

    this.state = {
      show: false,
      name: props ? props.name || '' : '',
      editing: false,
      person: props.person
    };
  }

  handleClose() {
    if (!this.state.editing)
      this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  save() {
    this.setState({ editing: true });
    setTimeout(() => {
      this.setState({ show: false, editing: false });
    }, 3000);
  }

  render() {
    let editButton = <Button variant="success" onClick={this.save}>Save</Button>;
    if (this.state.editing) {
      editButton = (<Button variant="success" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Updating <span className="text-primary">{this.state.name}</span>
      </Button>);
    }

    return (
      <>
        <button onClick={this.handleShow} className="b-float btn-primary" data-toggle="tooltip" data-placement="top"
          title="Edit Friend"><FontAwesomeIcon icon="edit" /></button>
        <Form>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <div>{this.state.person.name}</div>
                <div>Edit <span className="text-info">{this.state.name}</span></div>
              </Modal.Title>
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
                  onChange={this.handleNameChange}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button disabled={this.state.editing} variant="secondary" onClick={this.handleClose}>Close</Button>
              {editButton}
            </Modal.Footer>
          </Modal>
        </Form>
      </>
    );
  }
}

export default EditFriendModal