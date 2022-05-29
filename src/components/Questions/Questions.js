import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import questions from "../../constants/questions";
import "./questions.scss";

const Questions = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className="section container col-8 ">
      <h2 className="text-color-secondary-100 text-center pb-4">
        POPULAR QUESTIONS
      </h2>
      <div className="pt-4">
        {questions.map((question) => (
          <Accordion title={question.question}>{question.answer}</Accordion>
        ))}
      </div>
    </section>
  );
};

export default Questions;
