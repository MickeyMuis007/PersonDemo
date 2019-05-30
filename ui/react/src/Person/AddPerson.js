import React, { Component } from 'react';
import './AddPerson.css';
import {
  TextField, FormGroup, ExpansionPanel, Fab, FormLabel, Radio, RadioGroup, Button,
  ExpansionPanelSummary, ExpansionPanelDetails, Typography, FormControl, FormControlLabel
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LinkContainer } from 'react-router-bootstrap';


class AddPerson extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Add Person</h1>
        <form className="container add-friend-container bg-light">
          <TextField
            id="outlined-name"
            label="Name"
            className="col-md-6 mx-1"
            margin="normal"
            variant="outlined" />
          <FormControl component="fieldset" className='text-dark col-md-5 mx-1'>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender1">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
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
                  label="Add Friend"
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
                  label="Add Tag"
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
            <LinkContainer to={'/people'}>
              <Button variant="outlined" className="mx-2 col-md-2">Cancel</Button>
              </LinkContainer>
            <Button variant="outlined" color="primary" type="submit" className="mx-2 col-md-2">Save</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPerson;
