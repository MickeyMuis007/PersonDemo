import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Friend from './Friend/Friend';
import People from './Person/People';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Person Demo</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to={'/'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/people'} className="nav-link" href="#">People</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/friend'} className="nav-link" href="#">Friends</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <div className="content">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/people' component={People} />
              <Route path='/friend' component={Friend} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;