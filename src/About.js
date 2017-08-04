import React from 'react';
import { Col } from 'react-bootstrap';
import './General.css';
import './About.css';

const About = (
  <div id="about">
    <Col xs={8} md={8} xsOffset={2}>
    <h1>About Us</h1>

    <p>Andy Fritz, PLS, has over 20 years Land Surveying and Construction Management experience both in Colorado and Oklahoma.  Born and raised In Muskogee and a member of the Cherokee Nation, he knows the area and obstacles that may arise while on site.  His attention to detail and meeting the demands of the clients has earned him a reputation of excellence. </p>
    <p id="member">Member of the Oklahoma Society of Land Surveryors.</p>

    <div className="thePic"></div>
    </Col>  
  </div>
);

export default About;