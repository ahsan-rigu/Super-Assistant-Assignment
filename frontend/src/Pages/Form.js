import FormHeader from ".././Components/FormHeader";
import Paragraph from ".././Components/Paragraph";
import MCQ from ".././Components/MCQ";
import { fieldsData } from ".././data/FormFields";
import Checkbox from ".././Components/Checkbox";
import ShortAnswer from ".././Components/ShortAnswer";
import Dropdown from ".././Components/Dropdown";
import FileUpload from ".././Components/FileUpload";
import LinearScale from ".././Components/LinearScale";
import MCGrid from ".././Components/MCGrid";
import TickBoxGrid from ".././Components/TickBoxGrid";
import { useState } from "react";
import { validateFunctions } from ".././Utils/ValidiationFunctions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState(fieldsData);

  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    for (let field of data) {
      if (!validateFunctions[field.type](field.value)) {
        setSubmitError(field.title);
        navigate("/#" + field.title.replaceAll(" ", "-"));
        return;
      }
    }
    setSubmitError("");
    const formObject = {};
    for (let field of data) {
      formObject[field.title.replaceAll(" ", "")] = field.value;
    }
    try {
      await axios.post(
        "https://super-assistant-backend.onrender.com/data",
        formObject
      );
      navigate("/submitted");
    } catch (error) {
      alert("unable to submit form");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormHeader />
      {fieldsData.map((field) => {
        if (field.type === "radio")
          return (
            <MCQ
              title={field.title}
              options={field.options}
              setData={setData}
              submitError={submitError === field.title}
            />
          );
        if (field.type === "checkbox")
          return (
            <Checkbox
              title={field.title}
              options={field.options}
              setData={setData}
              submitError={submitError === field.title}
            />
          );
        if (field.type === "text")
          return (
            <ShortAnswer
              title={field.title}
              setData={setData}
              submitError={submitError === field.title}
            />
          );
        if (field.type === "textarea")
          return (
            <Paragraph
              title={field.title}
              setData={setData}
              submitError={submitError === field.title}
            />
          );
        if (field.type === "dropdown")
          return (
            <Dropdown
              title={field.title}
              options={field.options}
              setData={setData}
              submitError={submitError === field.title}
            />
          );
        if (field.type === "file")
          return (
            <FileUpload
              title={field.title}
              setData={setData}
              submitError={submitError === field.title}
              data={data}
            />
          );
        if (field.type === "linearScale")
          return (
            <LinearScale
              title={field.title}
              setData={setData}
              submitError={submitError === field.title}
            />
          );
        if (field.type === "radioGrid")
          return (
            <MCGrid
              gridData={field}
              setData={setData}
              submitError={submitError === field.title}
            />
          );
        if (field.type === "checkboxGrid")
          return (
            <TickBoxGrid
              gridData={field}
              setData={setData}
              submitError={submitError === field.title}
            />
          );
        return null;
      })}
      <span className="bottom-bar">
        <button type="submit">Submit</button>
        <span className="bar-container">
          <span className="bar"></span>
          Page 1 of 1
        </span>
        <a className="clear-btn" href="/">
          Clear form
        </a>
      </span>
    </form>
  );
};

export default Form;
