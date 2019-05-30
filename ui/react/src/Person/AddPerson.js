import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddPerson.css';
import {
  TextField, FormGroup, ExpansionPanel, Fab,
  ExpansionPanelSummary, ExpansionPanelDetails, Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class AddPerson extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Add Person</h1>
        <form className="container add-friend-container bg-light">
          <TextField
            id="outlined-name"
            label="Name"
            className="col-md-6"
            margin="normal"
            variant="outlined" />
            <TextField
            id="outlined-name"
            label="Gender"
            className="col-md-6"
            margin="normal"
            variant="outlined" />
          <FormGroup className="mb-3">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <div className="d-flex justify-content-center">
                  <Typography className="text-center">Friends</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails >
                <TextField
                  id="outlined-name"
                  label="Friend"
                  margin="normal"
                  className="col-md-8"
                  variant="outlined" />
                <Fab color="primary" aria-label="Add" className="my-3 mx-3">
                  <AddIcon />
                </Fab>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </FormGroup>
          <FormGroup className="mb-3">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <div className="d-flex justify-content-center">
                  <Typography className="text-center">Tags</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TextField
                  id="outlined-name"
                  label="Tag"
                  className="col-md-8"
                  margin="normal"
                  variant="outlined" />
                <Fab color="primary" aria-label="Add" className="my-3 mx-3">
                  <AddIcon />
                </Fab>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </FormGroup>
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
