import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from './Home/Home';
import Friend from './Friend/Friend';
import People from './Person/People';
import AddFriend from './Person/Friend/AddFriend';
import AddPerson from './Person/AddPerson';
import MaterialButtonDemo from './Material Demos/Button Demo/MaterialButtonDemo';
import { LinkContainer } from 'react-router-bootstrap';
import MaterialCheckboxDemo from './Material Demos/Checkboxes Demo/MaterialCheckboxDemo';
import MaterialDrawerDemo from './Material Demos/Drawer Demo/MaterialDrawerDemo';
import Blog from './MDB/Sections/Blog/Blog';

class App extends Component {
  // set active state for hamburger
  state = { active: false }

  handleClick = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand><Link to={'/'} className="navbar-brand">Person Demo</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <LinkContainer to={'/'}>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={'/people'}>
                    <Nav.Link>People</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={'/bootstrap-demo'}>
                    <Nav.Link>Bootstrap Demo</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="Material Demo" id="basic-nav-dropdown">
                    <LinkContainer to={'/material-button-demo'}>
                      <NavDropdown.Item >Material Button Demo</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={'/material-checkbox-demo'}>
                      <NavDropdown.Item >Material Checkbox Demo</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={'/material-drawer-demo'}>
                      <NavDropdown.Item >Material Drawer Demo</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <NavDropdown title="MDB Demo">
                    <LinkContainer to={'/mdb-section-blog'}><NavDropdown.Item>Sections Blog</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          <div className="content">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/people' component={People} />
              <Route path='/bootstrap-demo' component={Friend} />
              <Route path='/add-friend' component={AddFriend} />
              <Route path='/add-person' component={AddPerson} />
              <Route path='/material-button-demo' component={MaterialButtonDemo} />
              <Route path='/material-checkbox-demo' component={MaterialCheckboxDemo} />
              <Route path="/material-drawer-demo" component={MaterialDrawerDemo} />
              <Route path='/mdb-section-blog' component={Blog} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;