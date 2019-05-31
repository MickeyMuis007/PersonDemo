import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddFriend.css';


class AddFriend extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Add Friend</h1>
        <form className="container add-friend-container">
          <div className="input-group input-group-lg mb-3 col-md-8">
            <div className="input-group-prepend">
              <span className="input-group-text" id="name">Name</span>
            </div>
            <input className="form-control" aria-label="Name" aria-describedby="name" />
          </div>
          <div className="d-flex justify-content-end">
            <Link to={'/people'} className="btn btn-primary mx-2 col-md-2" type="submit">Cancel</Link>
            <button className="btn btn-success mx-2 col-md-2" type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFriend;
