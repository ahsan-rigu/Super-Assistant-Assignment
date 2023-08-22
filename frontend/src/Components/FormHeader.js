import React from "react";

const FormHeader = () => {
  return (
    <header>
      <h1>Assignment Task</h1>
      <p>
        The name and photo associated with your Google Account will be recorded
        when you upload files and submit this form. Your email address is not
        part of your response.
      </p>
      <span className="red">* indicates required field</span>
    </header>
  );
};

export default FormHeader;
