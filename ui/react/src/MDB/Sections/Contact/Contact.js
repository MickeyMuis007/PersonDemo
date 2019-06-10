import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import Contact1 from './Contact1/Contact1';
import Contact2 from './Contact2/Contact2';
import Contact3 from './Contact3/Contact3';

class Contact extends Component { 
  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 className="text-center">Contact 1</h1>
          <Divider className="material-divider"/>
          <Contact1 />
        </div>
        <div className="container-fluid">
          <h1 className="text-center">Contact 2</h1>
          <Divider className="material-divider"/>
          <Contact2 />
        </div>
        <div className="container-fluid">
          <h1 className="text-center">Contact 3</h1>
          <Divider className="material-divider"/>
          <Contact3 />
        </div>
      </>
    )
  }
}

export default Contact;