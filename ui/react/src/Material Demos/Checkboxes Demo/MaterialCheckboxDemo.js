import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Checkboxes from './Checkboxes';

class MaterialCheckboxDemo extends Component {
  render() {
    return (
      <>
        <Container>
          <h1>Material Checkbox Demo</h1>
          <div>
            <h2>Checkboxes</h2>
            <Checkboxes />
          </div>
        </Container>
      </>
    )
  }
}

export default MaterialCheckboxDemo;