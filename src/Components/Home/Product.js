import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Product({ data }) {
  return (
    <div className="text-center">
      <h1>Our Products</h1>
      <p>Say goodbye to pests with PestMaster - Your trusted partner in pest control and prevention</p>
      <Row xs={1} md={3} className="g-4">
        {data && data.length > 0 ? (
          data.map((item, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href={item.link} className="btn btn-primary">Know More</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          Array.from({ length:6 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/1317059852/photo/aedes-mosquitoe-is-sucking-blood-on-human-skin.jpg?s=612x612&w=0&k=20&c=FJoItD-SqroiLNBfnKfGD7kjOssT5P9JsYBt7vJSkTM=" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>Mosquito</Card.Title>
                    <Card.Text>
                    Protect yourself and your family from mosquito-borne diseases with our expert mosquito control services. Our team of skilled technicians uses the latest techniques and eco-friendly solutions to eliminate mosquitoes from your surroundings. We provide customized solutions tailored to your needs and ensure that your space is mosquito-free. Say goodbye to itchy bites and health risks, and enjoy a mosquito-free environment with our reliable pest control services.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

export default Product;
