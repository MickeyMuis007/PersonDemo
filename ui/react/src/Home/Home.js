import React, { Component } from 'react';
import NavigationButtons from './Navigation Buttons/NavigationButtons';

class Home extends Component {
  render() {
    return (
    <div className="container text-center">
      <h1>Person Demo</h1>
      <h2>Welcome to Person Demo</h2>
      <NavigationButtons />
    </div>
    )
  }
}

export default Home;