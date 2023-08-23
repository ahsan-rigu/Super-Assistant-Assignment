import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

const LinearScale = ({ title, setData, submitError }) => {
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
    <section className="linear-scale" id={title.replaceAll(" ", "-")}>
      <span>
        {" "}
        {title} <b className="red">*</b>
      </span>
      <div className="linear-scale-container">
        <span>Worst</span>

        <label>
          1
          <input
            type="radio"
            name="linear-scale"
            value={1}
            onChange={handleChange}
          />
        </label>
        <label>
          2
          <input
            type="radio"
            name="linear-scale"
            value={2}
            onChange={handleChange}
          />
        </label>
        <label>
          3
          <input
            type="radio"
            name="linear-scale"
            value={3}
            onChange={handleChange}
          />
        </label>
        <label>
          4
          <input
            type="radio"
            name="linear-scale"
            value={4}
            onChange={handleChange}
          />
        </label>
        <label>
          5
          <input
            type="radio"
            name="linear-scale"
            value={5}
            onChange={handleChange}
          />
        </label>
        <span>Best</span>
      </div>
      {changeError && (
        <span className="error">
          <MdErrorOutline size={"1.5rem"} /> This is a required question
        </span>
      )}
    </section>
  );
};

export default LinearScale;
