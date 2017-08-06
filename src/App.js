import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
// import Login from './containers/Login';
import Services from './Services';
import FAQ from './FAQ';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';





class App extends Component {

  componentDidMount() {
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
              <a href="/">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={() => scrollToComponent(this.services, { offset: -90, align: 'top', duration: 1500})}>Services</NavItem>
              <NavItem onClick={() => scrollToComponent(this.faq, { offset: -50, align: 'top', duration: 1500})}>FAQ</NavItem>
              <NavItem onClick={() => scrollToComponent(this.about, { offset: -10, align: 'top', duration: 1500})}>About Us</NavItem>
              <NavItem onClick={() => scrollToComponent(this.contact, { offset: -40, align: 'top', duration: 1500})}>Contact Us</NavItem>

              <RouteNavItem onClick={this.handleNavLink} href="/login">*admin</RouteNavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
       

      <Routes />
        <section className='services' ref={(section) => { this.services = section; }}>{Services}</section>
        <section className='faq' ref={(section) => { this.faq = section; }}>{FAQ}</section>
        <section className='about' ref={(section) => { this.about = section; }}>{About}</section>
        <section className='contact' ref={(section) => { this.contact = section; }}>{Contact}</section>

      <div className="footer">{Footer}</div>

    </div>



    );
  }
}

export default withRouter(App);
