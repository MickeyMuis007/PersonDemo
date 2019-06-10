import React, { Component } from "react";
import { Divider } from '@material-ui/core';
import BlogList1 from './BlogList1/BlogList1';

class Blog extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">Blog List1</h1>
        <Divider style={{backgroundColor: "white"}}/>
        <BlogList1 />
      </div>
    );
  }
}

export default Blog;