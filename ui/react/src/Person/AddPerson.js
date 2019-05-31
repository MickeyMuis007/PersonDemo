import React, { Component } from 'react';
import './AddPerson.css';
import {
  TextField, FormGroup, ExpansionPanel, Fab, FormLabel, Radio, RadioGroup, Button,
  ExpansionPanelSummary, ExpansionPanelDetails, Typography, FormControl, FormControlLabel
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LinkContainer } from 'react-router-bootstrap';
import FriendListView from './Friend/FriendListView';

class AddPerson extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      model: {
        name: '',
        gender: '',
        friends: [],
        tags: []
      }
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  save() {

  }

  cancel() {

  }

  handleNameChange(event) {
    console.log("Handle Name Change");
    const updateModel = { ...this.state.model };
    updateModel.name = event.target.value;
    this.setState({
      model: updateModel
    }, () => {
      console.log(this.state.model);
    });
  }

  handleGenderChange(event) {
    console.log("Handle gender change");
    const updateModel = { ...this.state.model };
    updateModel.gender = event.target.value;
    this.setState({
      model: updateModel
    }, () => {
      console.log(this.state.model);
    });
  }

  render() {
    const friendInput = (
      <div>
        <TextField
          id="outlined-name"
          label="Add Friend"
          margin="normal"
          className="col-md-8"
          variant="outlined" />
        <Fab color="primary" aria-label="Add" className="my-3 mx-3">
          <AddIcon />
        </Fab>
      </div>
    );

    const tagInput = (
      <div>
        <TextField
          id="outlined-name"
          label="Add Tag"
          className="col-md-8"
          margin="normal"
          variant="outlined" />
        <Fab color="primary" aria-label="Add" className="my-3 mx-3">
          <AddIcon />
        </Fab>
      </div>
    )
    return (
      <div>
        <h1 className="text-center">Add Person</h1>
        <form className="container add-friend-container bg-light">
          <TextField
            id="outlined-name"
            label="Name"
            className="col-md-6 mx-1"
            margin="normal"
            variant="outlined"
            name="name"
            onChange={this.handleNameChange} />
          <FormControl component="fieldset" className='text-dark col-md-5 mx-1'>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender"
              onChange={this.handleGenderChange}>
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
                {friendInput}
                <FriendListView />
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
                {tagInput}
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
