import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-body-tertiary">
        <p className="p-3 m-0 text-center">
          Copyright &copy; 2023 - {currentYear} developed by Foodie Resturant -
          All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
