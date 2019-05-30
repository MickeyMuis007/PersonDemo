import React, { Component } from 'react';
import { Container, Divider } from '@material-ui/core';
import TemporaryDrawer from './TemporaryDrawer';

class MaterialDrawerDemo extends Component {
  render() {
    return (
      <>
        <Container>
          <h1>Material Drawer Demo</h1>
          <Divider style={{backgroundColor: "white"}}/>
          <div className="my-3">
            <h2>Temporary Drawer</h2>
            <TemporaryDrawer />
          </div>
        </Container>
      </>
    )
  }
}

export default MaterialDrawerDemo;