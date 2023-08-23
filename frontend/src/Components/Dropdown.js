import React, { useEffect, useState } from "react";
import { validateFunctions } from "../Utils/ValidiationFunctions";
import { MdErrorOutline } from "react-icons/md";

const Dropdown = ({ title, options, setData, submitError }) => {
  const [changeError, setChangeError] = useState(false);

  const handleChange = (e) => {
    setData((prevData) => {
      return prevData.map((field) => {
        if (field.title === title) {
          field.value = e.target.value;
          const valid = validateFunctions.text(field.value);
          valid === changeError && setTimeout(() => setChangeError(!valid), 0);
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
    <section className="dropdown" id={title}>
      <span>
        {" "}
        Dropdown <b className="red">*</b>
      </span>
      <select name="dropdown" id="dropdown" onChange={handleChange}>
        <option value="">Choose</option>
        {options.map((option) => (
          <option key={title + option}>{option}</option>
        ))}
      </select>
      {changeError && (
        <span className="error">
          <MdErrorOutline size={"1.5rem"} /> This is a required question
        </span>
      )}
    </section>
  );
};

export default Dropdown;
