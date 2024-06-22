import React, { useState } from "react";
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from "react-icons/io5";

function AccordionItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="accordion-item">
      <p className="answer">
        {" "}
        {question}{" "}
        <span onClick={handleShowAnswer}>
          {" "}
          {showAnswer ? (
            <IoChevronUpCircleOutline size={28} />
          ) : (
            <IoChevronDownCircleOutline size={28} />
          )}{" "}
        </span>{" "}
      </p>
      {showAnswer && <p> {answer} </p>}
    </div>
  );
}

export default AccordionItem;
