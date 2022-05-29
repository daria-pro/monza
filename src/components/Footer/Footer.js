import React from "react";
import images from "../../constants/images";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer section py-3 bg-color-primary-100">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="nopadding">
            <a href="/" className="navbar-brand">
              <img
                className="nav__logo-image"
                alt="Monza Motorsports"
                src={images.logo}
              />
            </a>
          </div>
          <ul className="navbar-nav flex-row">
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
          </ul>
          <div>
            <a href="#" className="me-4">
              <img src={images.facebook} alt="facebook icon" />
            </a>
            <a href="#">
              <img src={images.instagram} alt="instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
