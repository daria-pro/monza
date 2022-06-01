import React from "react";
import "./card.scss";

const Card = ({ product }) => {
  const {
    name,
    year,
    mileage,
    transmission,
    fuel,
    price,
    isNew,
    isSold,
    photo,
  } = product;

  return (
    <div className={`col-md-6 col-lg-4 col-xl-3 ${isSold && "sold"}`}>
      <div className="card rounded-0 ">
        <a className="card-image" href="/">
          <img
            src={photo}
            className={`card-img-top rounded-0 ${isSold && "sold-image"}`}
            alt="Volkswagen Tiguan"
          />
          {isSold && <h1 className="card-sold">sold</h1>}
          {isNew && <div className="card-new">New</div>}
        </a>
        <div className="card-body text-padding text-start">
          <h6 className="card-title mb-3 d-flex flex-nowrap">
            <span className="text-color-secondary-200 me-2">{year}</span>
            <span className="title-model">{name}</span>
          </h6>
          <div className="card-text span-2 d-flex flex-xl-row  flex-wrap mb-4">
            <p className="card-info">{mileage}</p>
            <p className="card-info">{transmission}</p>
            <p className="card-info">{fuel}</p>
          </div>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
