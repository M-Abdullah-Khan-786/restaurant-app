import React from "react";
import "../css/Conatct.css";
import ContactInfo from "../components/ContactInfo";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Contact = () => {
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
              <Form>
                <Form.Group className="row mb-3">
                  <div className="col-md-6">
                    <Form.Label htmlFor="first-name" className="fw-bold my-2">
                      First Name
                    </Form.Label>
                    <Form.Control
                      id="first-name"
                      type="text"
                      placeholder="Enter Your First Name"
                      required
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
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <div className="col-md-6">
                    <Form.Label htmlFor="email-address" className="fw-bold my-2">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      id="email-address"
                      type="email"
                      placeholder="Enter Your Email Address"
                      required
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
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <div className="col-md-6">
                    <Form.Label htmlFor="reservation-date" className="fw-bold my-2">
                      Reservtion Date
                    </Form.Label>
                    <Form.Control id="reservation-date" type="date" required/>
                  </div>
                  <div className="col-md-6">
                    <Form.Label htmlFor="numberguests" className="fw-bold my-2">
                      Number of Guests
                    </Form.Label>
                    <Form.Control id="numberguests" type="number" required />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label htmlFor="Description" className="fw-bold my-2">
                    Description
                  </Form.Label>
                  <Form.Control
                    id="Description"
                    type="textarea"
                    placeholder="Enter Description"
                    style={{ height: "100px" }}
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
