import React, { Component } from 'react';
import { Container} from '@material-ui/core';
import FloatingActionButtonZoom from './FloatingActionButtonZoom';
import FloatingActionButtons from './FloatingActionButton';
import ButtonSizes from './ButtonSizes';
import IconLabelButtons from './IconLabelButtons';
import IconButtons from './IconButtons';
import ButtonBases from './ButtonBases';
import ButtonRouter from './ButtonRouter';

class MaterialButtonDemo extends Component {
  render() {
    return (
      <>
        <Container>
          <h1>Material Demo's</h1>
          <div className="my-3">
            <h2>Floating Buttons</h2>
            <FloatingActionButtons />
          </div>
          <div className="my-3">
            <h2>Floating Action Button Zoom</h2>
            <FloatingActionButtonZoom />
          </div>
          <div className="my-3">
            <h2>Button Sizes</h2>
            <ButtonSizes />
          </div>
          <div className="my-3">
            <h2>Icon Label Buttons</h2>
            <IconLabelButtons />
          </div>
          <div className="my-3">
            <h2>Icon Buttons</h2>
            <IconButtons />
          </div>
          <div className="my-3">
            <h2>Button Bases</h2>
            <ButtonBases />
          </div>
          <div className="my-3">
            <h2>Button Router</h2>
            <ButtonRouter />
          </div>
        </Container>

      </>
    )
  }
}

export default MaterialButtonDemo;