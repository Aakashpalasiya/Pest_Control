import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import LayOutComponent from './LayOutComponent'


function Career() {
  return (
    <LayOutComponent>
<Container fluid className="text-center">
  <Row>
    <Col xs={12} sm={12} md={12} lg={12} className="mx-auto">
      <img
        src="https://media.istockphoto.com/id/1224507024/photo/hand-holding-cockroach-on-house-background-eliminate-cockroach-in-house.jpg?s=612x612&w=0&k=20&c=cbyVzew93D-f4xkBqZVI2oqTtZubG2wftWb8kEiWdYA="
        className="img-fluid w-100"
        alt="Our OurPortfolio Web Banner"
        style={{ height: "33.33vw" }}
      />
    </Col>
  </Row>
</Container>


 <Card className="my-4">
      <Card.Body>
        <Card.Title>Job Listing</Card.Title>
        <Card.Text>
          If you are interested in a remunerative & fruitful job in Delhi-NCR, India, corner the market talent & champing the beat to face challenges and craving to accompany the career in software & web development then we are here with favorable opportunities.
        </Card.Text>
        <Card.Text>
          We have need for candidates with basic knowledge in domains as web designing, web development, software programming & prepares oneself for our forthcoming projects. We also recruit experienced persons in distinct to software industries for senior positions. We proffer better career and prospective prospects for experienced professionals in our client services. Under mentioned are the list of qualifications required for our job listing.
        </Card.Text>
        <ul>
          <li>Basic knowledge in web designing, web development, and software programming</li>
          <li>Experience in software industries for senior positions</li>
          <li>Good communication and teamwork skills</li>
          <li>Bachelor's or Master's degree in Computer Science or related field</li>
        </ul>
        <Button href="mailto:hr@sangtechtechnologies.in" variant="primary">Apply Now</Button>
      </Card.Body>
    </Card>
    </LayOutComponent>
  )
}

export default Career