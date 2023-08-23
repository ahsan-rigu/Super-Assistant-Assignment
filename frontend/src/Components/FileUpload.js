import React from "react";
import { MdOutlineClear, MdOutlineFileUpload } from "react-icons/md";

const FileUpload = ({ title, setData, data }) => {
  const onChange = (e) => {
    setData((prevData) => {
      return prevData.map((field) => {
        if (field.title === title) {
          field.value = e.target.files[0].name;
          return { ...field };
        }
        return field;
      });
    });
  };

  const clear = (e) => {
    setData((prevData) => {
      return prevData.map((field) => {
        if (field.title === title) {
          field.value = "";
          return { ...field };
        }
        return field;
      });
    });
  };

  const value = data.find((field) => field.title === title).value;

  return (
    <section className="file-upload" id={title.replaceAll(" ", "-")}>
      <span>
        {" "}
        {title} <b className="red">*</b>
      </span>
      <span className="wrapper">
        <label htmlFor="file-upload" className="file-upload-label">
          <span className={value ? "hidden file-selector" : "file-selector"}>
            <MdOutlineFileUpload size={"1.25rem"} /> Add File
          </span>
          <input
            type="file"
            name="file-upload"
            id="file-upload"
            className={value ? "file-deats" : "hidden"}
            onChange={onChange}
          />
        </label>
        {value && (
          <button type="button" className="btn-clear" onClick={clear}>
            <MdOutlineClear size={"2rem"} />
          </button>
        )}
      </span>
    </section>
  );
};

export default FileUpload;
