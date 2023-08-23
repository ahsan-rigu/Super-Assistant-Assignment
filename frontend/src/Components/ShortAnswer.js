import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { validateFunctions } from "../Utils/ValidiationFunctions";

const ShortAnswer = ({ title, setData, submitError }) => {
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
    <section className="short-answer" id={title.replaceAll(" ", "-")}>
      <span>
        {" "}
        {title} <b className="red">*</b>
      </span>
      <input
        type="text"
        name="short-answer"
        id="short-answer"
        placeholder="Your answer"
        onChange={handleChange}
      />
      {changeError && (
        <span className="error">
          <MdErrorOutline size={"1.5rem"} /> This is a required question
        </span>
      )}
    </section>
  );
};

export default ShortAnswer;
