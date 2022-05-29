import React from "react";
import "./subscription.scss";

const Subscription = () => {
  return (
    <section className="section bg-color-primary-100">
      <div className="container text-color-primary-200 py-4">
        <div className="row align-items-center gx-5">
          <div className="col-5 ">
            <h4 className="fw-medium mb-3">
              Haven't found a suitable vehicle?
            </h4>
            <p>
              Sign up for our newsletter and be the first to know when we
              publish new vehicle offers.
            </p>
          </div>
          <form className="col-5 form-color-secondary-300">
            <input
              type="email"
              className="form-control sign-up-input p-3"
              placeholder="Enter your email"
              id="exampleInputEmail1"
            />
          </form>
          <button
            type="submit"
            className="btn btn-color-primary-200 col-2 sign-up-btn"
          >
            Subscribe now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
