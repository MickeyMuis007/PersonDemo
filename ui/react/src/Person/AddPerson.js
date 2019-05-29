import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddPerson.css';
import { Collapse, Button} from 'react-bootstrap';


class AddPerson extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  
  render() {
    const { open } = this.state;

    return (
      <div>
        <h1 className="text-center">Add Person</h1>
        <form className="container add-friend-container">
          <div className="input-group input-group-lg mb-3 col-md-8">
            <div className="input-group-prepend">
              <span className="input-group-text" id="name">Name</span>
            </div>
            <input className="form-control" aria-label="Name" aria-describedby="name" />
          </div>
          <div className="input-group input-group-lg mb-3 col-md-8">
            <div className="input-group-prepend">
              <span className="input-group-text" id="name">Gender</span>
            </div>
            <input className="form-control" aria-label="Name" aria-describedby="name" />
          </div>
         
          <div className="input-group input-group-lg mb-3 col-md-8">
            <div className="input-group-prepend">
              <span className="input-group-text" id="name">Tags</span>
            </div>
            <input className="form-control" aria-label="Name" aria-describedby="name" />
          </div>
          <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}>Add Friend</Button>

          <Collapse in={this.state.open}>
          <div className="input-group input-group-lg mb-3 col-md-8 mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="name">Friends</span>
            </div>
            <input className="form-control" aria-label="Name" aria-describedby="name" />
          </div>
        </Collapse>

          <div className="d-flex justify-content-end">
            <Link to={'/people'} className="btn btn-primary mx-2 col-md-2" type="submit">Cancel</Link>
            <button className="btn btn-success mx-2 col-md-2" type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPerson;
