import React, { useState } from "react";
import images from "../../constants/images";
import "./sortDropdown.scss";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Price (ascending)");
  const options = [
    "Price (ascending)",
    "Price (descending)",
    "Mileage (ascending)",
    "Mileage (descending)",
    "Year (ascending)",
    "Year (descending)",
  ];

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="sort-container">
      <div className="sort-header" onClick={toggle}>
        <img
          className="sort-icon me-2"
          src={images.asc}
          alt="ascending order"
        />
        <p className="drop-down-title m-0">{selectedOption}</p>
      </div>
      {isOpen && (
        <div className="drop-down-list-container ">
          <ul className="sort-list">
            {options.map((option) => (
              <li
                className="sort-item"
                value={option}
                onClick={() => onSelect(option)}
                key={Math.random()}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
