import React from "react";
import "./subscription.scss";

const Subscription = () => {
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
          <form className="col-md-8 col-lg-7 form-color-secondary-300 d-flex align-items-center">
            <input
              type="email"
              className="form-control sign-up-input p-3 me-3"
              placeholder="Enter your email"
              id="exampleInputEmail1"
            />
            <button
              type="submit"
              className=" btn btn-color-primary-200 sign-up-btn button-white w-50 w-lg-20"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
