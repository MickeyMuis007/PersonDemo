import React, { Component } from 'react';
import { Modal, Button, Spinner, Pagination, Tab, Tabs } from 'react-bootstrap';

class Friend extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 12; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    const paginationBasic = (
      <div>
        <Pagination>{items}</Pagination>
        <br />

        <Pagination size="lg">{items}</Pagination>
        <br />

        <Pagination size="sm">{items}</Pagination>
      </div>
    );

    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Spinner animation="grow" />

        {/* Pagination Example */}
        <div>
          {paginationBasic}
        </div>

        {/* Tabs example */}
        <div>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <h1>Home Page</h1>
              <p>This is some details on home page</p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <h1>Profile Page</h1>
              <p>This is some details on profile page</p>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <h1>Contact Page</h1>
              <p>This is some details on contact page</p>
            </Tab>
          </Tabs>
        </div>
      </>
    );
  }
}

export default Friend