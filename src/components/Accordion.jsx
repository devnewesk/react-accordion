import React from "react";
import { QA } from "../data/QA";
import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <div className="accordion">
      {QA.map((q, index) => {
        return <AccordionItem {...q} key={index} />;
      })}
    </div>
  );
}

export default Accordion;
