import React, { Component } from 'react';
import NavigationButtons from './Navigation Buttons/NavigationButtons';
import { Divider } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
    <div className="container text-center">
      <h1 style={{marginBottom: "0px"}}>Welcome to Person Demo</h1>
      <Divider style={{backgroundColor: "white", marginBottom: "30px", marginTop: "0px"}}/>
      <NavigationButtons />
    </div>
    )
  }
}

export default Home;