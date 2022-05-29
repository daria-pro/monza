import React from "react";
import images from "../../constants/images";
import "./accordion.scss";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="">
      <div className="accordion">
        <div
          className={`accordion-header ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          <h5 className={`accordion-title ${isOpen ? "open" : ""}`}>{title}</h5>
          <img
            className="accordion-icon"
            src={`${isOpen ? images.minus : images.plus}`}
          />
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
