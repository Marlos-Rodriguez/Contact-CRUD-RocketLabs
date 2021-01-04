import React, { useState } from "react";

const useForm = (callback, initialState = {}) => {
  //New user State
  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};

export default useForm;
