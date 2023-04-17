import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import LayOutComponent from './LayOutComponent'

import Card from 'react-bootstrap/Card';


function OurProductPage(data) {
  return (
    <LayOutComponent>
       <Container fluid className="text-center">
<Row>
  <Col xs={12} sm={12} md={12} lg={12} className="mx-auto">
    <img
      src="https://t3.ftcdn.net/jpg/03/18/92/26/360_F_318922637_yIjzYNzNQsU6KZupFizYWor6nsoxqNff.jpg"
      className="img-fluid w-100"
      alt="Our OurPortfolio Web Banner"
      style={{ height: "33.33vw" }}
    />
  </Col>
</Row>
</Container> 
    <div className="text-center">
      <h1>Our Products</h1>
      <p>Your trusted partner in pest control and prevention.</p>
      <Row xs={1} md={3} className="g-4">
        {data && data.length > 0 ? (
          data.map((item, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={item.image} alt={item.title} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href={item.link} className="btn btn-primary">
                      Know More
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          Array.from({ length: 18 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMVvH0JxtH3sIOzZLXz2vullc2KQIJuAFew&usqp=CAU"
                  alt="Pest Control"
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>Mosquito Control</Card.Title>
                    <Card.Text>
                    Mosquito Control refers to the measures taken to manage and reduce the population of mosquitoes in a specific area. These measures may include the use of insecticides, the elimination of standing water sources, and the implementation of physical barriers to prevent mosquitoes from entering buildings. Proper mosquito control is important for preventing the spread of mosquito-borne illnesses, such as West Nile virus, Zika virus, and dengue fever
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
     </LayOutComponent>
  );
}

export default OurProductPage;
