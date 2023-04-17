import React from 'react'
import LayOutComponent from './LayOutComponent'

import { Container, Row, Col,Card  } from 'react-bootstrap';

function Services() {
  return (
    <LayOutComponent>
      <Container fluid className="text-center">
  <Row>
    <Col xs={12} sm={12} md={12} lg={12} className="mx-auto">
      <img
        src="https://thumbs.dreamstime.com/b/pest-control-concept-dead-beetles-red-palm-weevil-rhynchophorus-ferrugineusons-flying-banner-isolated-white-212384681.jpg"
        className="img-fluid w-100"
        alt="Our OurPortfolio Web Banner"
        style={{ height: "33.33vw" }}
      />
    </Col>
  </Row>
</Container>
    <Container>
      <Row className="mt-4">
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.xxl.thumbs.canstockphoto.com/isolated-cockroach-on-white-background-insect-not-welcome-in-kitchen-stock-photography_csp2463330.jpg"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Cockroach</Card.Title>
              <Card.Text>
              Cockroaches are one of the most common and troublesome household pests. They are difficult to control and can spread diseases, contaminate food and cause allergic reactions. Our cockroach control services are designed to eliminate these pesky insects from your home or business. Our experienced technicians use safe and effective methods to locate and treat cockroach infestations, ensuring that your property is free of these unwanted guests. Say goodbye to cockroaches and enjoy a cleaner, healthier living space with our professional pest control services              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/1224507024/photo/hand-holding-cockroach-on-house-background-eliminate-cockroach-in-house.jpg?s=612x612&w=0&k=20&c=cbyVzew93D-f4xkBqZVI2oqTtZubG2wftWb8kEiWdYA="
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Cockroach</Card.Title>
              <Card.Text>
              Cockroaches are one of the most common and troublesome household pests. They are difficult to control and can spread diseases, contaminate food and cause allergic reactions. Our cockroach control services are designed to eliminate these pesky insects from your home or business. Our experienced technicians use safe and effective methods to locate and treat cockroach infestations, ensuring that your property is free of these unwanted guests. Say goodbye to cockroaches and enjoy a cleaner, healthier living space with our professional pest control services              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2023/03/17/02/10/housefly-7857794__340.jpg"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Bee</Card.Title>
              <Card.Text>
              Pest infestations can be a nightmare for any homeowner or business owner. They can damage property, spread diseases, and cause significant discomfort. But with our comprehensive pest control solutions, you can rest easy knowing that your property is protected from unwanted pests.

Our team of experienced technicians uses the latest techniques and equipment to identify and eliminate pest infestations. We work closely with our clients to develop customized pest control plans that address their unique needs and concerns. Whether you're dealing with rodents, insects, or other pests, we have the expertise and resources to get the job done right.

            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="mt-4">
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2021/04/22/17/46/bug-6199670__480.jpg"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Insect</Card.Title>
              <Card.Text>
              Controlling insects is crucial for maintaining a healthy and safe living environment. From common household pests like ants and cockroaches to potentially dangerous insects like wasps and mosquitoes, we use a variety of effective methods to eliminate these unwanted guests. Our trained professionals have the knowledge and experience to identify the type of insect, determine the most effective treatment, and implement it safely and efficiently. Our goal is to provide our clients with a pest-free environment and peace of mind knowing that their home or business is protected from the harmful effects of insect infestations.              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bed_bug%2C_Cimex_lectularius.jpg/300px-Bed_bug%2C_Cimex_lectularius.jpg"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Cockroach</Card.Title>
              <Card.Text>
              Controlling insects is crucial for maintaining a healthy and safe living environment. From common household pests like ants and cockroaches to potentially dangerous insects like wasps and mosquitoes, we use a variety of effective methods to eliminate these unwanted guests. Our trained professionals have the knowledge and experience to identify the type of insect, determine the most effective treatment, and implement it safely and efficiently. Our goal is to provide our clients with a pest-free environment and peace of mind knowing that their home or business is protected from the harmful effects of insect infestations.              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2013/04/21/13/24/filbert-weevil-106114__340.jpg"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Small Insects</Card.Title>
              <Card.Text>
              Controlling insects is crucial for maintaining a healthy and safe living environment. From common household pests like ants and cockroaches to potentially dangerous insects like wasps and mosquitoes, we use a variety of effective methods to eliminate these unwanted guests. Our trained professionals have the knowledge and experience to identify the type of insect, determine the most effective treatment, and implement it safely and efficiently. Our goal is to provide our clients with a pest-free environment and peace of mind knowing that their home or business is protected from the harmful effects of insect infestations.              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </LayOutComponent>
  )
}

export default Services