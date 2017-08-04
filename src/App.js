import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Routes from './Routes';
import './App.css';

class App extends Component {
  handleNavLink = (event) => {
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute('href'));
}
  render() {
    return (
      <div className="App container">
        <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Fritz Land Surveying, LLC</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#services">Client Services</NavItem>
            <NavItem eventKey={2} href="#faq">FAQ</NavItem>
            <NavItem eventKey={3} href="#about">About Us</NavItem>
            <NavItem eventKey={4} href="#contact">Contact Us</NavItem>  

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#admin">Admin</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
    );
  }
}

export default withRouter(App);
