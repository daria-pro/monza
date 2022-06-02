import React, { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import "./subscription.scss";

const Subscription = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="section bg-color-primary-100">
      <div className="container text-color-primary-200 py-4">
        <div className="d-flex flex-column flex-sm-row row align-items-center justify-content-between">
          <div className="col-md-4">
            <h4 className="fw-medium mb-3">
              Haven't found a suitable vehicle?
            </h4>
            <p>
              Sign up for our newsletter and be the first to know when we
              publish new vehicle offers.
            </p>
          </div>
          <Form
            as={Col}
            md="7"
            className="d-flex flex-wrap align-items-center "
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group
              controlId="validationCustomUsername"
              className="flex-grow-1 me-3 mb-4"
            >
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  className="sign-up-input"
                  placeholder="Enter your email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback
                  className="validation-feedback"
                  type="invalid"
                >
                  Incorrect email
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button
              className="sign-up-btn button-white btn-color-primary-200 px-4 mb-4"
              onClick={handleSubmit}
              type="submit"
            >
              Subscribe now
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
