import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Friend extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      anotherModalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.openAnotherModal = this.openAnotherModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  openAnotherModal() {
    this.setState({ anotherModalOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false, anotherModalOpen: false });
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Friends</h1>
        <div>
          <button className="btn btn-primary" onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello This is a modal example</h2>
            <button className="btn btn-primary" onClick={this.closeModal}>close</button>

          </Modal>
          <button className="btn btn-primary" onClick={this.openAnotherModal}>Open Another Modal</button>
          <Modal
            isOpen={this.state.anotherModalOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Opened another modal</h2>
            <button className="btn btn-primary" onClick={this.closeModal}>close</button>

          </Modal>
        </div>
      </div>
    )
  }
}

export default Friend