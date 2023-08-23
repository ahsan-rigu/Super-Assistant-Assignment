import React, { useEffect, useState } from "react";
import { validateFunctions } from "../Utils/ValidiationFunctions";
import { MdErrorOutline } from "react-icons/md";

const Checkbox = ({ title, options, setData, submitError }) => {
  const [changeError, setChangeError] = useState(false);

  const handleChange = (e) => {
    setData((prevData) => {
      return prevData.map((field) => {
        if (field.title === title) {
          if (!field.value) field.value = [];
          if (e.target.checked) {
            field.value.push(e.target.value);
            setTimeout(() => setChangeError(false), 0);
          } else {
            field.value = field.value.filter(
              (value) => value !== e.target.value
            );
            validateFunctions.checkbox(field.value) ||
              setTimeout(() => setChangeError(true), 0);
          }
          return { ...field };
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
    <section className="checkbox" id={title}>
      <span>
        {title} <b className="red">*</b>
      </span>
      {options.map((option) => (
        <label key={title + option}>
          <input type="checkbox" onChange={handleChange} value={option} />
          {option}
        </label>
      ))}
      {changeError && (
        <span className="error">
          <MdErrorOutline size={"1.5rem"} /> This is a required question
        </span>
      )}
    </section>
  );
};

export default Checkbox;
