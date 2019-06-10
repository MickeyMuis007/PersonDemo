import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import Product3 from './Product3/Product3';
import Product4 from './Product4/Product4';
import Pricing1 from './Pricing1/Pricing1';

class ECommerce extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 className="text-center">Product 3</h1>
          <Divider className="white" />
          <Product3 />
        </div>
        <div className="container-fluid">
          <h1 className="text-center">Product 4</h1>
          <Divider className="white" />
          <Product4 />
        </div>
        <div className="container-fluid">
          <h1 className="text-center">Pricing 1</h1>
          <Divider className="white" />
          <Pricing1 />
        </div>
      </>
    )
  }
}

export default ECommerce;