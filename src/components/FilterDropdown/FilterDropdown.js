import React, { useState } from "react";
import { getFilterOptions } from "../utils";
import images from "../../constants/images";
import data from "../../constants/data";
import "./filterDropdown.scss";

const FilterDropdown = (props) => {
  const { filterKey, onFilter } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [selectedOption, setSelectedOption] = useState(filterKey);
  const options = getFilterOptions(data, filterKey);

  const toggle = () => {
    setIsOpen(!isOpen);
    setShowHeader(!showHeader);
  };

  const onSelect = (value) => {
    const key = filterKey.toLowerCase();
    onFilter(key, value);

    setSelectedOption(value);
    setIsOpen(false);
    setShowHeader(true);
  };

  return (
    <div className="drop-down-container col-2 mb-5 me-1">
      {showHeader && (
        <div
          className={`
          drop-down-header 
          ${selectedOption !== filterKey && "selected"}
          `}
          onClick={toggle}
        >
          <p className="drop-down-title m-0">{selectedOption}</p>
          <img src={images.arrowDown} />
        </div>
      )}
      {isOpen && (
        <div className="drop-down-list-container ">
          <ul className="drop-down-list ">
            <li
              className={`drop-down-item ${isOpen && "fw-bold"}`}
              value={filterKey}
              onClick={() => onSelect(filterKey)}
            >
              {filterKey}
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

export default FilterDropdown;
