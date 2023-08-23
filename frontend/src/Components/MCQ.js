import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

const MCQ = ({ title, options, setData, submitError }) => {
  const [changeError, setChangeError] = useState(false);

  const handleChange = (e) => {
    setData((prevData) => {
      return prevData.map((field) => {
        if (field.title === title) {
          setTimeout(() => setChangeError(false), 0);
          return { ...field, value: e.target.value };
        }
        return field;
      });
    });
  };
  useEffect(() => {
    if (submitError) {
      setChangeError(true);
    }
  }, [submitError, title]);

  return (
    <section className="mcq" id={title}>
      <span>
        {title} <b className="red">*</b>
      </span>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="radio"
              name={title}
              value={option}
              onChange={handleChange}
            />{" "}
            {option}
          </label>
        );
      })}
      {changeError && (
        <span className="error">
          <MdErrorOutline size={"1.5rem"} /> This is a required question
        </span>
      )}
    </section>
  );
};

export default MCQ;
