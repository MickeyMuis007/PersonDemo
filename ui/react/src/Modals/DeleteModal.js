import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class DeleteModal extends Component {
  constructor(props) {
    super();
    console.log(props)
    this.state = {
      modalIsOpen: false,
      anotherModalOpen: false,
      name: props.name || ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false, anotherModalOpen: false});
  }

  render() {
    return (
    <div className="container text-center">
      <div>
        <button className="btn btn-primary" onClick={this.openModal}>Delete</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
         >
          <h2 ref={subtitle => this.subtitle = subtitle}>Delete {this.state.name}</h2>
          <button className="btn btn-primary" onClick={this.closeModal}>close</button>
         
        </Modal>
      </div>
    </div>
    )
  }
}

export default DeleteModal;