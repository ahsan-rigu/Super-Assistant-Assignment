import React from "react";

const MCQ = ({ title, options }) => {
  return (
    <section className="mcq">
      <span>
        {title} <b className="red">*</b>
      </span>
      {options.map((option) => {
        return (
          <label key={option}>
            <input type="radio" name={title} id={option} /> {option}
          </label>
        );
      })}
    </section>
  );
};

export default MCQ;
