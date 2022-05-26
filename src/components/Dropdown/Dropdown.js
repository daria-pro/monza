import React, { useState } from "react";
import images from "../../constants/images";
import "./dropdown.scss";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Year");
  const options = ["2016", "2017", "2018"];

  const toggle = () => {
    setIsOpen(!isOpen);
    setShowHeader(!showHeader);
  };

  const onSelect = (value) => {
    console.log(value);
    setSelectedOption(value);
    setIsOpen(false);
    setShowHeader(true);
    // console.log(selectedOption);
  };

  return (
    <div className="drop-down-container mb-5">
      {showHeader && (
        <div className="drop-down-header" onClick={toggle}>
          <p className="m-0">{selectedOption}</p>
          <img src={images.arrowDown} />
        </div>
      )}
      {isOpen && (
        <div className="drop-down-list-container">
          <ul className="drop-down-list">
            <li
              className={`drop-down-item ${isOpen && "fw-bold"}`}
              value={"Year"}
              onClick={() => onSelect("Year")}
            >
              Year
            </li>
            {options.map((option) => (
              <li
                className="drop-down-item"
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

export default Dropdown;
