import React from "react";
import images from "../../constants/images";
import "./header.scss";

const Header = () => {
  return (
    <header className="header text-color-primary-200">
      <div className="header__content">
        <div className="container h-100 d-flex flex-column justify-content-between ">
          <nav className="navbar">
            <div className="py-3">
              <a href="/" className="navbar-brand">
                <img
                  className="nav__logo-image"
                  alt="Monza Motorsports"
                  src={images.logo}
                />
              </a>
            </div>
            <ul className="navbar-nav flex-row flex-wrap">
              <li className="nav-item">
                <a className="nav-link link-color-primary-200" href="#">
                  Inventory
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color-primary-200" href="#">
                  Financing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color-primary-200" href="#">
                  Contacts
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="me-4">
                  <img src={images.facebook} alt="facebook icon" />
                </a>
                <a href="#">
                  <img src={images.instagram} alt="instagram icon" />
                </a>
              </li>
            </ul>
          </nav>
          <section className="h-75">
            <h1 className="text-color-primary-200 fw-bold">
              The right way to get a car
            </h1>
            <div className="row mt-4 mb-sm-3 mb-lg-5">
              <p className="col-md-4 col-lg-3">
                Monza Motorsports is a boutique-style dealership specializing in
                premium imports. We offer an advanced online vehicle purchasing
                experience with integrated financing and contactless home
                delivery.
              </p>
              <p className="col-md-4 col-lg-3 ">
                All of our cars come with a 5 day/500 kilometres no-hassle
                exchange option. Since 2012 Monza Motorsports has been the
                benchmark for innovation in the automotive industry.
              </p>
            </div>
            <a className="btn btn-outline-color-primary-200 col-3 button-1">
              Browse cars
            </a>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
