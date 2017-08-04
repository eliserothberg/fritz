import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
// import Login from './containers/Login';
import Services from './Services';

class App extends Component {
  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }
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
              <a href="/">Fritz Land Surveying, LLC</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={() => scrollToComponent(this.Services, { offset: 0, align: 'top', duration: 1500})}>Client Services</NavItem>
              <NavItem onClick={() => scrollToComponent(this.faq, { offset: 0, align: 'top', duration: 1500})}>FAQ</NavItem>
              <NavItem onClick={() => scrollToComponent(this.about, { offset: 0, align: 'top', duration: 1500})}>About Us</NavItem>
              <NavItem onClick={() => scrollToComponent(this.contact, { offset: 0, align: 'top', duration: 1500})}>Contact Us</NavItem>

              <RouteNavItem onClick={this.handleNavLink} href="/login">*</RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        //         <div className="opener"></div>

      <Routes />
        <section className='services' ref={(section) => { this.Services = section; }}>{Services}</section>
        <section className='faq' ref={(section) => { this.faq = section; }}>FAQ</section>
        <section className='about' ref={(section) => { this.about = section; }}>About</section>
        <section className='contact' ref={(section) => { this.contact = section; }}>Contact</section>

    </div>

    );
  }
}

export default withRouter(App);
