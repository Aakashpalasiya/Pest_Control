import React from 'react'
import LayOutComponent from './LayOutComponent'
import { Container, Row, Col} from 'react-bootstrap';


function Client() {
  return (
    <LayOutComponent>
<Container fluid className="text-center">
  <Row>
    <Col xs={12} sm={12} md={12} lg={12} className="mx-auto">
      <img
        src="https://thumbs.dreamstime.com/b/pest-control-web-banner-house-hygiene-disinfection-service-isometric-website-professional-team-exterminating-insects-151844892.jpg"
        className="img-fluid w-100"
        alt="Our OurPortfolio Web Banner"
        style={{ height: "33.33vw" }}
      />
    </Col>
  </Row>
</Container>
<Container fluid>
  <Row>
    <Col xs={12} sm={12} md={8} lg={8} className="mx-auto">
      <h1 className="text-center my-5">Welcome to Our Pest Control Services</h1>
      <p className="lead">
        At Our Pest Control Services, we are dedicated to providing effective pest control solutions to homes and businesses in the local area. With our expert knowledge and state-of-the-art equipment, we can eliminate a wide range of pests, including rodents, insects, and other unwanted creatures that can cause damage to your property and health hazards to your family or employees.
      </p>
      <p className="lead">
        We offer a range of pest control services, including inspections, treatments, and ongoing maintenance plans to keep your property pest-free. Our team of trained and certified technicians uses safe and eco-friendly products to ensure that your home or business remains free from pests while also minimizing any impact on the environment.
      </p>
      <p className="lead">
        Our commitment to customer satisfaction is second to none, and we strive to provide a personalized and professional service to every client. We work closely with you to understand your specific needs and concerns, and tailor our services to meet your requirements. Whether you need a one-time treatment or ongoing maintenance, we are here to help.
      </p>
      <p className="lead">
        Contact us today to learn more about our pest control services and how we can help you protect your property from unwanted pests. Our friendly and knowledgeable team is always on hand to answer any questions you may have and provide expert advice and guidance.
      </p>
    </Col>
  </Row>
</Container>

</LayOutComponent>
  )
}

export default Client