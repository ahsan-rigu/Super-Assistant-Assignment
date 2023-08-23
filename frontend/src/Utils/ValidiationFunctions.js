export const validateFunctions = {
  radio: (value) => (!value ? false : true),
  checkbox: (values) => (values?.length > 0 ? true : false),
  text: (value) => (!value ? false : true),
  textarea: (value) => (!value ? false : true),
  dropdown: (value) => (!value ? false : true),
  file: (value) => (!value ? false : true),
  linearScale: (value) => (!value ? false : true),
  radioGrid: (values) => {
    if (!values) return false;
    for (let value of values) {
      if (value === "") return false;
    }
    return true;
  },
  checkboxGrid: (values) => {
    if (!values) return false;
    for (let value of values) {
      if (value.length === 0) return false;
    }
    return true;
  },
};
