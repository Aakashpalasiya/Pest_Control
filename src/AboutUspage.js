import React from 'react'
import LayOutComponent from './LayOutComponent'
import { Container, Row, Col} from 'react-bootstrap';
import Abtphoto from './Components/Images/logo.jpg'



function AboutUspage() {
  return (
    <LayOutComponent>
<Container fluid className="text-center">
  <Row>
    <Col xs={12} sm={12} md={12} lg={12} className="mx-auto">
      <img
        src={Abtphoto}
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
      <h1 className="text-center my-5">Welcome to <b>Pest Master</b></h1>
      <p className="lead">
      Welcome to PestMaster, the most trusted and reliable name in Mumbai for pest control services. With over 20 years of experience in the industry, our founder Mr. Ravindra Sanap has worked with top companies like PCI (Pest Control India Pvt Ltd) and Godrej Hi Care, and has established PestMaster as a leading pest control agency in the region.
      </p>
      <p className="lead">
      We understand that pests can be a major problem for homes and businesses, which is why we have a team of experienced and skilled technicians who specialize in dealing with all types of pests. Whether it's cockroaches, ants, termites, rodents, or any other pests, our team is equipped to handle them all with utmost professionalism.
      </p>
      <p className="lead">
      At PestMaster, we use the latest and most effective methods and technologies to provide timely, efficient, and cost-effective pest control services. Our team will work with you to understand your specific needs and customize a pest control plan that suits your requirements.
      </p>
      <p className="lead">
      Our clients trust us as the #1 Pest Control Agency in Mumbai, and we take pride in providing them with the highest quality of service. We use only the best products and equipment, and ensure that our services are safe and environmentally friendly.
      </p>
      <p className="lead">
      So, whether you need pest control services for your home or business, trust PestMaster to provide you with the best solutions. Contact us today to schedule a consultation with our team and say goodbye to pests for good!
      </p>
    </Col>
  </Row>
</Container>

</LayOutComponent>
  )
}

export default AboutUspage