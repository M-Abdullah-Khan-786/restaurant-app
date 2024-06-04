import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const MenuButton = () => {
  return (
    <>
      <Link to="/menu">
        <Button variant="warning" size="lg">
          View Menu
        </Button>
      </Link>
    </>
  );
};

export default MenuButton;
