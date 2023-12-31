import React, { useEffect, useState } from "react";
import { validateFunctions } from "../Utils/ValidiationFunctions";
import { MdErrorOutline } from "react-icons/md";

const Paragraph = ({ title, setData, submitError }) => {
  const textAreaRef = React.useRef();

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
    textAreaRef.current.addEventListener("input", function () {
      if (this.scrollHeight > 24) {
        this.style.height = "auto";
        this.style.height = this.scrollHeight - 18 + "px";
        this.style.height = this.scrollHeight + "px";
      } else {
        this.style.height = "16px";
      }
    });
  }, []);

  useEffect(() => {
    if (submitError) {
      setChangeError(true);
    }
  }, [submitError, title]);

  return (
    <section className="long-answer" id={title}>
      <span>
        {" "}
        {title} <b className="red">*</b>
      </span>
      <textarea
        name="paragraph"
        id="long-answer"
        ref={textAreaRef}
        style={{ height: "16px" }}
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

export default Paragraph;
