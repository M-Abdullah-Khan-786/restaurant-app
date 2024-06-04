import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="navbar sticky-top bg-dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand text-warning fs-2 fw-semibold">
            Foodie Resturant
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-white border-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <LinkContainer to="/">
              <Nav.Link className="text-uppercase text-white navbar">
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Link className="text-uppercase text-white navbar">
                Menu
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-uppercase text-white navbar">
                About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-uppercase text-white navbar">
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
