import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../assets/images/persons/1.jpg";

const Reviews = () => {
  return (
    <div className="container py-5 review">
      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card border="warning" style={{ width: "18rem" }} className="mx-auto">
            <Card.Header className="text-center">
              <div className="image">
                <img
                  className="rounded-circle w-25 border-0"
                  alt="avatar1"
                  src={img1}
                />
              </div>
              <div className="name fw-bold my-2">Harry</div>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="warning" style={{ width: "18rem" }} className="mx-auto">
            <Card.Header className="text-center">
              <div className="image">
                <img
                  className="rounded-circle w-25 border-0"
                  alt="avatar1"
                  src={img1}
                />
              </div>
              <div className="name fw-bold my-2">George</div>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="warning" style={{ width: "18rem" }} className="mx-auto">
            <Card.Header className="text-center">
              <div className="image">
                <img
                  className="rounded-circle w-25 border-0"
                  alt="avatar1"
                  src={img1}
                />
              </div>
              <div className="name fw-bold my-2">William</div>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="warning" style={{ width: "18rem" }} className="mx-auto">
            <Card.Header className="text-center">
              <div className="image">
                <img
                  className="rounded-circle w-25 border-0"
                  alt="avatar1"
                  src={img1}
                />
              </div>
              <div className="name fw-bold my-2">Winston</div>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;
