import React from "react";
import "../css/Menu.css";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import gm1 from "../assets/images/gallery/gl1.jpg";
import gm2 from "../assets/images/gallery/gl2.jpg";
import gm3 from "../assets/images/gallery/gl3.jpg";
import gm4 from "../assets/images/gallery/gl4.jpg";
import gm5 from "../assets/images/gallery/gl5.jpg";
import gm6 from "../assets/images/gallery/gl6.jpg";
import gm7 from "../assets/images/gallery/gl7.jpg";
import gm8 from "../assets/images/gallery/gl8.jpg";
import gm9 from "../assets/images/gallery/gl9.jpg";
import gm10 from "../assets/images/gallery/gl10.jpg";
import gm11 from "../assets/images/gallery/gl11.jpg";
import gm13 from "../assets/images/gallery/gl13.jpg";

const Food = [
  {
    id: 1,
    menuimage: gm1,
    name: "Seekh kebab",
    description: "Chicken Seekh kebab 6pcs with 2 Rogni Roti",
    price: "700 Rs",
  },
  {
    id: 2,
    menuimage: gm2,
    name: "Biryani",
    description: "Full Plate with Raita, Pepsi 500ml",
    price: "400 Rs",
  },
  {
    id: 3,
    menuimage: gm7,
    name: "Chargha",
    description: "Full Chargha with 1.5 Liter Drink",
    price: "3000 Rs",
  },
  {
    id: 4,
    menuimage: gm3,
    name: "French toast",
    description: "French toast Special BreakFast 4 pcs",
    price: "600 Rs",
  },
  {
    id: 5,
    menuimage: gm6,
    name: "Desi Roti and Naan",
    description: "Desi Roti and Naan 2 pcs",
    price: "80 Rs",
  },
  {
    id: 6,
    menuimage: gm10,
    name: "Halwa Puri",
    description: "Special BreakFast Halwa Puri",
    price: "500 Rs",
  },
];
const Desserts = [
  {
    id: 1,
    menuimage: gm11,
    name: "Gajar ka halwa",
    description: "Gajar ka halwa in Desi Ghee one plate",
    price: "500 Rs",
  },
  {
    id: 2,
    menuimage: gm9,
    name: "Ice Cream",
    description: "Ice Cream one Cup",
    price: "300 Rs",
  },
  {
    id: 3,
    menuimage: gm8,
    name: "Ras malai",
    description: "Special Ras malai",
    price: "500 Rs",
  },
];
const Drinks = [
  {
    id: 1,
    menuimage: gm4,
    name: "Kashmiri pink tea",
    description: "Kashmiri pink tea",
    price: "400 Rs",
  },
  {
    id: 2,
    menuimage: gm5,
    name: "Fresh Juice",
    description: "Fresh Juice",
    price: "500 Rs",
  },
  {
    id: 3,
    menuimage: gm13,
    name: "coffee",
    description: "coffee",
    price: "550 Rs",
  },
];

const Menu = () => {
  return (
    <>
      <div className="menu-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">Our Menu</h1>
          </div>
        </header>
        <div className="food my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-warning">
              Food
            </h2>
            <Row xs={1} md={3} className="g-4">
              {Food.map((food, id) => (
                <Col key={id}>
                  <Card className="card">
                    <Card.Img variant="top" src={food.menuimage} />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {food.name}
                      </Card.Title>
                      <hr />
                      <Card.Text className="text-center">
                        {food.description}
                      </Card.Text>
                    </Card.Body>
                    <button type="button" class="btn btn-warning fw-bold">
                      {food.price}
                    </button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="desserts my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-warning">
              Desserts
            </h2>
            <Row xs={1} md={3} className="g-4">
              {Desserts.map((desserts, id) => (
                <Col key={id}>
                  <Card className="card">
                    <Card.Img variant="top" src={desserts.menuimage} />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {desserts.name}
                      </Card.Title>
                      <hr />
                      <Card.Text className="text-center">
                        {desserts.description}
                      </Card.Text>
                    </Card.Body>
                    <button type="button" class="btn btn-warning fw-bold">
                      {desserts.price}
                    </button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="desserts my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-warning">
              Drinks
            </h2>
            <Row xs={1} md={3} className="g-4">
              {Drinks.map((drinks, id) => (
                <Col key={id}>
                  <Card className="card">
                    <Card.Img variant="top" src={drinks.menuimage} />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {drinks.name}
                      </Card.Title>
                      <hr />
                      <Card.Text className="text-center">
                        {drinks.description}
                      </Card.Text>
                    </Card.Body>
                    <button type="button" class="btn btn-warning fw-bold">
                      {drinks.price}
                    </button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
