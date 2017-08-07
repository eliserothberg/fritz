import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Services.css';

const Services = (
  <div className="skew">
    <div id="services">
     <Col md={12}>
        <h1>Our Services</h1>
      <Grid>
        <Row className="show-grid">
          <Col md={4}><p>Preliminary Survey</p>
                <h4>The collection of survey data on which to base studies on a proposed project 
                 a proposed final survey.</h4></Col>
          <Col md={4}><p>Boundary and Stake Survey</p>
                <h4>A survey performed to establish or re-establish a boundary line on the ground 
                or to obtain data for constructing a map or plat showing a boundary line.</h4></Col>
          <Col md={4}><p>Construction Survey</p>
                <h4>The survey measurements made while construction is in process to control elevation, 
                horizontal position and dimensions, and to determine adequacy of completion.</h4></Col>
        
          <Col md={4}><p>Topographic Survey</p>
                <h4>A survey of an area which has for its major purposes and determination of the 
                configuration of the surface of the ground (using elevation contours) and the location 
                of the natural and artificial objects.</h4></Col>
          <Col md={4}><p>Site Planning and Design Survey</p>
                <h4>A combination of boundary and topographic surveys with the resulting information 
                being used for designing development features such as roads, subdivisions, utilities, 
                buildings, etc.</h4></Col>  
          <Col md={4}><p>Mortgage Inspection Report</p>
                <h4>A report made for the sole use of a lending institution to evaluate title problems 
                relating to possession. The Mortgage Inspection Report shows the relationship of the 
                improvements to the approximate property lines and filed easements or rights of way.  
                Survey makers are not usually set with this type of survey.</h4></Col>
          
          <Col md={4}><p>American Land and Title Association (ALTA)<br></br>Title Survey </p>
                <h4>A survey of real property, including the plat of survey, acceptable to a title 
                insurance company for purposes of insuring title to said real property, free and clear 
                of survey questions, except those questions disclosed by the survey and indicated on 
                the plat.</h4></Col>
          <Col md={4}><p>Elevation Survey</p>
                <h4>A survey of a property, building or residence and its relation to a flood plain.  
                Elevation surveys are used by lending agencies and insurance companies to determine the need for flood insurance or if a site is suitable for a new structure.</h4></Col>
          <Col md={4}><p>Subdivision Survey</p>
                <h4>A type of land survey in which the legal boundaries of an area are located and the 
                area is divided into parcels of lots, streets, rights-of-way and other accessories.  
                All necessary corners or dividing lines are marked or monumented.</h4></Col>
        </Row>
      </Grid>
    </Col>
  </div>
</div>
);


export default Services;