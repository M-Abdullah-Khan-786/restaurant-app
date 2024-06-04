import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const MenuButtonOutline = () => {
  return (
    <>
      <Link to="/menu">
        <Button variant="outline-warning" size="lg">
          View Menu
        </Button>
      </Link>
    </>
  );
};

export default MenuButtonOutline;

