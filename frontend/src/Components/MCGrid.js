import React, { useEffect, useState } from "react";
import { validateFunctions } from "../Utils/ValidiationFunctions";
import { MdErrorOutline } from "react-icons/md";

const MCGrid = ({
  gridData: { title, columns, rows },
  setData,
  submitError,
}) => {
  const [changeError, setChangeError] = useState(false);

  const handleChange = (e, index) => {
    setData((prevData) => {
      return prevData.map((field) => {
        if (field.title === title) {
          if (!field.value) field.value = ["", "", ""];
          field.value[index] = e.target.value;
          const valid = validateFunctions.radioGrid(field.value);
          console.log(valid);
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
    <section className="multiple-choice-grid" id={title.replaceAll(" ", "-")}>
      <span>
        {" "}
        {title} <b className="red">*</b>
      </span>
      <table>
        <thead>
          <tr>
            <td></td>
            {columns.map((column, index) => {
              return <td key={title + column + index}>{column}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={title + row.title + index}>
                <td>{row.title}</td>
                {row.options.map((option) => {
                  return (
                    <td key={title + row.title + option + index}>
                      <input
                        type="radio"
                        name={title + row.title}
                        value={option}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {changeError && (
        <span className="error">
          <MdErrorOutline size={"1.5rem"} /> This question requires at least one
          response per row
        </span>
      )}
    </section>
  );
};

export default MCGrid;
