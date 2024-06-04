import React, { useState } from "react";
import "../css/Conatct.css";
import ContactInfo from "../components/ContactInfo";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formdata, setFormdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    reservation_date: "",
    total_guests: "",
    description: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8800/api/v1/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await JSON.stringify(formdata),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setFormdata({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          reservation_date: "",
          total_guests: "",
          description: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="menu-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">Contact Us</h1>
          </div>
        </header>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center ">
              <Form onSubmit={submitForm}>
                <Form.Group className="row mb-3">
                  <div className="col-md-6">
                    <Form.Label htmlFor="first-name" className="fw-bold my-2">
                      First Name
                    </Form.Label>
                    <Form.Control
                      id="first-name"
                      type="text"
                      placeholder="Enter Your First Name"
                      name="first_name"
                      onChange={handleInput}
                      value={formdata.first_name}
                      autoComplete="false"
                    />
                  </div>
                  <div className="col-md-6">
                    <Form.Label htmlFor="last-name" className="fw-bold my-2">
                      Last Name
                    </Form.Label>
                    <Form.Control
                      id="last-name"
                      type="text"
                      placeholder="Enter Your Last Name"
                      name="last_name"
                      onChange={handleInput}
                      value={formdata.last_name}
                      autoComplete="false"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <div className="col-md-6">
                    <Form.Label
                      htmlFor="email-address"
                      className="fw-bold my-2"
                    >
                      Email Address
                    </Form.Label>
                    <Form.Control
                      id="email-address"
                      type="email"
                      placeholder="Enter Your Email Address"
                      name="email"
                      onChange={handleInput}
                      value={formdata.email}
                      autoComplete="false"
                    />
                  </div>
                  <div className="col-md-6">
                    <Form.Label htmlFor="phone-number" className="fw-bold my-2">
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      id="phone-number"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      name="phone"
                      onChange={handleInput}
                      value={formdata.phone}
                      autoComplete="false"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <div className="col-md-6">
                    <Form.Label
                      htmlFor="reservation-date"
                      className="fw-bold my-2"
                    >
                      Reservtion Date
                    </Form.Label>
                    <Form.Control
                      id="reservation-date"
                      type="date"
                      name="reservation_date"
                      onChange={handleInput}
                      value={formdata.reservation_date}
                      autoComplete="false"
                    />
                  </div>
                  <div className="col-md-6">
                    <Form.Label htmlFor="numberguests" className="fw-bold my-2">
                      Number of Guests
                    </Form.Label>
                    <Form.Control
                      id="numberguests"
                      type="number"
                      name="total_guests"
                      onChange={handleInput}
                      value={formdata.total_guests}
                      autoComplete="false"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label htmlFor="Description" className="fw-bold my-2">
                    Description
                  </Form.Label>
                  <Form.Control
                    style={{ height: "100px" }}
                    id="Description"
                    type="textarea"
                    placeholder="Enter Description"
                    name="description"
                    onChange={handleInput}
                    value={formdata.description}
                    autoComplete="false"
                  />
                </Form.Group>
                <Button
                  as="input"
                  size="lg"
                  type="submit"
                  variant="warning"
                  value="Submit"
                  className="float-end"
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
