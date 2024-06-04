import React from "react";
import "../css/Home.css";
import MenuButton from "../components/MenuButton";
import AboutButton from "../components/AboutButton";
import MenuButtonOutline from "../components/MenuButtonOutline";
import img from "../assets/images/header.jpg";
import about from "../assets/images/about.jpg";
import ContactInfo from "../components/ContactInfo";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                <h2 className="mb-0 text-black fw-bold">Welcome to</h2>
                <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                  Foodie Resturant
                </h1>
                <MenuButton />
              </div>
            </div>
          </div>
        </header>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
              <img src={about} alt="" className="img-fluid w-50 imageabout" />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="fs-1 mb-5 text-uppercase fw-bold">About us</h2>
              <p className="text-center">
                Welcome to <b>Foodie Resturant</b>, where culinary passion meets
                exceptional dining! We are a foodie haven dedicated to
                satisfying your cravings for delicious breakfasts, hearty
                lunches, and exquisite dinners.
              </p>
              <p className="mb-5 text-center">
                At <b>Foodie Resturant</b>, we believe that every meal should be
                a memorable experience, and we're here to take your taste buds
                on a delightful journey.
              </p>
              <AboutButton />
            </div>
          </div>
        </div>
        <div className="menu-section py-5 text-light shadow">
          <div className="container d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favourite</h2>
            <div className="row mb-5 w-100">
              <div className="col-lg-4 d-flex flex-column align-items-center mb-5 mb-lg-0">
                <h3 className="fs-2 mb-5">Food</h3>
                <ul className="px-0">
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2">Biryani</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">450 Rs</p>
                  </li>
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2">Seekh kabab</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">1500 Rs</p>
                  </li>
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2">Chicken karahi</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">3000 Rs</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center mb-5 mb-lg-0">
                <h3 className="fs-2 mb-5">Desserts</h3>
                <ul className="px-0">
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2"> Ice Cream</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">450 Rs</p>
                  </li>
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2">Ras malai</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">500 Rs</p>
                  </li>
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2">Gajar Halwa</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">800 Rs</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center mb-5 mb-lg-0">
                <h3 className="fs-2 mb-5">Drinks</h3>
                <ul className="px-0">
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2">Tea</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">200 Rs</p>
                  </li>
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2">Coffee</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">500 Rs</p>
                  </li>
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2">Fresh Juice</p>
                    <p className="fs-3 mx-2 text-warning fw-bold">400 Rs</p>
                  </li>
                </ul>
              </div>
            </div>
            <MenuButtonOutline />
          </div>
        </div>
        <div className="bg-dark text-light py-5 shadow">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
                <ContactInfo />
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={img} className="img-fluid w-50" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
