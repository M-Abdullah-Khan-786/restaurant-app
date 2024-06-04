import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const AboutButton = () => {
  return (
    <>
      <Link to="/about">
        <Button variant="outline-warning" size="lg">
          About Us
        </Button>
      </Link>
    </>
  );
};

export default AboutButton;
