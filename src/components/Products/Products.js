import React, { useEffect, useState } from "react";
import { Card, FilterDropdown, SortDropdown } from "../index";
import { toNumber } from "../utils";
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
    const filtered = filteredData.filter(function (product) {
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
      return filtered;
    } else return filtered.filter((product) => product.isSold === false);
  };

  const cards = filterData();

  const onSort = (value) => {
    setFilteredData(
      [...filteredData].sort((a, b) => {
        const mileage1 = toNumber(a.mileage);
        const mileage2 = toNumber(b.mileage);
        const price1 = toNumber(a.price);
        const price2 = toNumber(b.price);
        switch (value) {
          case "Price (ascending)":
            return price1 > price2 ? 1 : price2 > price1 ? -1 : 0;
          case "Price (descending)":
            return price1 > price2 ? -1 : price2 > price1 ? 1 : 0;
          case "Mileage (ascending)":
            return mileage1 > mileage2 ? 1 : mileage2 > mileage1 ? -1 : 0;
          case "Mileage (descending)":
            return mileage1 > mileage2 ? -1 : mileage2 > mileage1 ? 1 : 0;
          case "Year (ascending)":
            return a.year > b.year ? 1 : b.year > a.year ? -1 : 0;
          case "Year (descending)":
            return a.year > b.year ? -1 : b.year > a.year ? 1 : 0;
          default:
            return;
        }
      })
    );
  };

  const showAvailable = (event) => {
    if (event.target.checked) {
      setShowSold(false);
    } else {
      setShowSold(true);
    }
  };

  return (
    <div id="products" className="section container">
      <h2 className="text-color-secondary-100 text-center">CURRENT OFFERS</h2>
      <div className="filters d-flex flex-md-row flex-wrap align-items-center justify-content-between">
        <FilterDropdown filterKey="Year" onFilter={handleFilterChange} />
        <FilterDropdown filterKey="Name" onFilter={handleFilterChange} />
        <FilterDropdown filterKey="Mileage" onFilter={handleFilterChange} />
        <FilterDropdown filterKey="Fuel" onFilter={handleFilterChange} />
        <FilterDropdown filterKey="Price" onFilter={handleFilterChange} />
        <button className="col-xxl-3 col-2 btn btn-color-primary-300 button-red">
          {cards.length} cars
        </button>
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
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
        <div className="d-flex align-items-center col-5 sort-label justify-content-between">
          <div>Sort by</div>
          <SortDropdown onSort={onSort} />
        </div>
      </div>
      <div className="row g-4">
        {cards.map((product, key) => (
          <Card product={product} key={key} showSold={showSold} />
        ))}
      </div>
    </div>
  );
};

export default Products;
