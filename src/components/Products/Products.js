import React, { useEffect, useState } from "react";
import { Card, FilterDropdown, SortDropdown } from "../index";
import data from "../../constants/data";
import "./products.scss";

const Products = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [showSold, setShowSold] = useState(true);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    filterData();
  }, [filters, showSold]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => {
      if (key === value.toLowerCase()) {
        return { ...prev, [key]: null };
      }
      return { ...prev, [key]: value };
    });
  };

  const filterData = () => {
    const filtered = data.filter(function (product) {
      for (const filter in filters) {
        if (!filters[filter]) {
          continue;
        }
        if (product[filter] !== filters[filter]) {
          return false;
        }
      }
      return true;
    });

    if (showSold) {
      setFilteredData(filtered);
    } else
      setFilteredData(filtered.filter((product) => product.isSold === false));
  };

  const showAvailable = (event) => {
    if (event.target.checked) {
      setShowSold(false);
    } else {
      setShowSold(true);
    }
  };

  return (
    <div className="section container">
      <h2 className="text-color-secondary-100 text-center">CURRENT OFFERS</h2>
      <div className="filters d-flex flex-wrap align-items-center justify-content-between">
        <FilterDropdown filterKey="Year" onFilter={handleFilterChange} />
        <FilterDropdown filterKey="Name" onFilter={handleFilterChange} />
        <FilterDropdown filterKey="Mileage" onFilter={handleFilterChange} />
        <FilterDropdown filterKey="Fuel" onFilter={handleFilterChange} />
        <FilterDropdown filterKey="Price" onFilter={handleFilterChange} />
        <button className="col-xxl-3 col-sm-2 btn btn-color-primary-300 button-red ">
          {filteredData.length} cars
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="available"
            id="available"
            onChange={showAvailable}
          />
          <label className="form-check-label" htmlFor="available">
            Instantly available vehicles
          </label>
        </div>
        <div className="d-flex align-items-center col-4 sort-label justify-content-end">
          <p className="mb-0">Sort by</p>
          <SortDropdown />
        </div>
      </div>
      <div className="row g-4">
        {filteredData.map((product, key) => (
          <Card product={product} key={key} showSold={showSold} />
        ))}
      </div>
    </div>
  );
};

export default Products;
