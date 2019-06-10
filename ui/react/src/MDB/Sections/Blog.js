import React, { Component } from "react";
import { Divider } from '@material-ui/core';
import BlogList1 from './BlogList1/BlogList1';
import BlogList2 from './BlogList2/BlogList2';
import BlogList3 from './BlogList3/BlogList3';
import BlogList4 from './BlogList4/BlogList4';

class Blog extends Component {

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 className="text-center">Blog List 1</h1>
          <Divider style={{ backgroundColor: "white" }} />
          <BlogList1 />
        </div>
        <div className="container-fluid">
          <h1 className="text-center">Blog List 2</h1>
          <Divider style={{ backgroundColor: "white" }} />
          <BlogList2 />
        </div>
        <div className="container-fluid">
          <h1 className="text-center">Blog List 3</h1>
          <Divider style={{ backgroundColor: "white" }} />
          <BlogList3 />
        </div>
        <div className="container-fluid">
          <h1 className="text-center">Blog List 4</h1>
          <Divider style={{ backgroundColor: "white" }} />
          <BlogList4 />
        </div>
      </>
    );
  }
}

export default Blog;