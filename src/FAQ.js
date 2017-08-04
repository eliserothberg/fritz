import React from 'react';
import { Col } from 'react-bootstrap';
import './General.css';
import './FAQ.css';

const FAQ = (
  <div id="faq">
    <Col xs={8} md={8} xsOffset={2}>
      <h1>FAQ</h1>

      <h2>WHEN IS A SURVEY USUALLY NEEDED?</h2>
      <ul>
        <li>For mortgage loan purposes.</li>
        <li>Before title in land is transferred.</li>
        <li>Before land is subdivided.</li>
        <li>Before land is developed by construction of buildings, roads, fences, etc.</li>
        <li>Before a boundary dispute arises.</li>
        <li>Before a building or fence is to be built near a property line.</li>
        <li>Before a lot is to be conveyed from a larger tract and the lot has not been surveyed.</li>
      </ul>
      <br></br>
      
      <h2>WHAT DOES THE SURVEYOR NEED FROM ME?</h2>
      <ul>
        <li>The purpose and type of survey.</li>
        <li>A copy of your deed.</li>
        <li>Any plats you have, and information about the location of cornors and lines.</li>
        <li>Brief history of ownership.</li>
        <li>Name and address of adjacent property owners if known.</li>
        <li>Information about disagreements over location of corners and lines.</li>
        <li>Abstract and title opinion if avialable and requested by the survey.</li>
      </ul>
      <br></br>
      
      <h2>HOW MUCH WILL A SURVEY COST?</h2>
      <p>Surveyors usually charge by the hour, so land surveying cost is dependent upon many factors, such as the type of survey and equipment required, the availability of existing records, and monuments, the type of terrain, and your surveyors' familiarity and knowledge of the area.  Because of these variables, it is often difficult to determine the exact fee; however, based on general experience, the surveyor can usually furnish an approximate estimate of the cost.</p>
      <br></br>
      
      <p>To reduce the possibility of misunderstanding, the surveyor may request that you sign an agreement that includes a description of the work to be completed, approximate completion date, a lump sum price or hourly rate and a payment schedule.</p>
      <br></br>
    </Col>
  </div>
);

export default FAQ;
