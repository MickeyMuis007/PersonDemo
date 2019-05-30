import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Checkboxes from './Checkboxes';
import CheckboxLabels from './CheckboxLabels';
import CheckboxesGroup from './CheckBoxesGroup';

class MaterialCheckboxDemo extends Component {
  render() {
    return (
      <>
        <Container>
          <h1>Material Checkbox Demo</h1>
          <div className="my-3">
            <h2>Checkboxes</h2>
            <Checkboxes />
          </div>
          <div className="my-3">
            <h2>Checkbox Labels</h2>X
            <CheckboxLabels />
          </div>
          <div className="my-3">
            <h2>Checkboxex Group</h2>X
            <CheckboxesGroup />
          </div>
        </Container>
      </>
    )
  }
}

export default MaterialCheckboxDemo;