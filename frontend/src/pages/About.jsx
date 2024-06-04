import React from "react";
import "../css/About.css";
import ImageGallery from "../component/ImageGallery";
import Reviews from "../component/Reviews";

const About = () => {
  return (
    <>
      <div className="about-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">About Us</h1>
          </div>
        </header>

        <div className="container my-5">
          <p className="text-center">
            Welcome to <b>Foodie Resturant</b>, where culinary passion meets
            exceptional dining! We are a foodie haven dedicated to satisfying
            your cravings for delicious breakfasts, hearty lunches, and
            exquisite dinners. At <b>Foodie Resturant</b>, we believe that every
            meal should be a memorable experience, and we're here to take your
            taste buds on a delightful journey.
          </p>
          <div className="row py-3">
            <div className="col-lg-6 ">
              <h3 className="text-center">Our Culinary Philosophy</h3>
              <p className="text-justify">
                At the heart of our restaurant is a team of talented chefs who
                are passionate about creating culinary masterpieces. We source
                the finest, freshest ingredients to craft dishes that not only
                satisfy your hunger but also awaken your senses. From innovative
                breakfast creations to comforting lunch options and indulgent
                dinners, we are committed to delivering an unparalleled
                gastronomic adventure.
              </p>
            </div>
            <div className="col-lg-6 ">
              <h3 className="text-center">Lunch that Nourishes</h3>
              <p className="text-justify">
                Our lunch menu is a reflection of our commitment to providing
                nourishing, well-balanced meals that keep you fueled throughout
                the day. From vibrant salads to hearty sandwiches and savory
                entrees, our lunch selections are crafted to offer a satisfying
                midday reprieve for busy foodies.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-6 ">
              <h3 className="text-center">Dinner: A Culinary Symphony</h3>
              <p className="text-justify">
                As the day winds down, our dinner menu takes center stage,
                offering an elegant and diverse range of dishes. From
                mouthwatering appetizers to sumptuous main courses and decadent
                desserts, our dinner options are designed to elevate your
                evening into a memorable dining experience.
              </p>
            </div>
            <div className="col-lg-6 ">
              <h3 className="text-center">Our Commitment to Quality</h3>
              <p className="text-justify">
                We take pride in using only the finest ingredients, sourced
                locally whenever possible, to ensure the highest quality in
                every dish. Our chefs pay meticulous attention to detail,
                infusing passion and creativity into every recipe. At{" "}
                <b>Foodie Resturant</b>, we believe that great food begins with
                exceptional ingredients and is elevated by the artistry of our
                culinary team.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-6 ">
              <h3 className="text-center">A Warm and Inviting Ambiance</h3>
              <p className="text-justify">
                Our restaurant is more than just a place to eat; it's a
                welcoming space where friends and family come together to savor
                delicious meals and create lasting memories. The ambiance is
                designed to complement the culinary experience, providing a cozy
                and stylish setting for you to enjoy your breakfast, lunch, or
                dinner.
              </p>
            </div>
            <div className="col-lg-6 ">
              <h3 className="text-center">Exceptional Service</h3>
              <p className="text-justify">
                Our commitment to excellence extends beyond the kitchen to our
                attentive and friendly staff. We strive to provide exceptional
                service, ensuring that your time at <b>Foodie Resturant</b> is
                not only a feast for your taste buds but a delightful overall
                dining experience.
              </p>
            </div>
          </div>
          <p className="text-center">
            Join us at <b>Foodie Resturant</b> and embark on a culinary journey
            that celebrates the art of food. We look forward to serving you and
            making every meal a delectable celebration of flavors!
          </p>
        </div>
        <div className="bg-dark text-light">
          <ImageGallery />
        </div>
        <Reviews />
      </div>
    </>
  );
};

export default About;
