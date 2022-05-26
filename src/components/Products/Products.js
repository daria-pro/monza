import React from "react";
import data from "../../constants/data";
import Dropdown from "../Dropdown/Dropdown";

const Products = () => {
  return (
    <div className="container">
      <h2 className="text-color-secondary-100 text-center">CURRENT OFFERS</h2>

      <Dropdown />
    </div>
  );
};

export default Products;
