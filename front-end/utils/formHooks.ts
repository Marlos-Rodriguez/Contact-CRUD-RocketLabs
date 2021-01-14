import { useState } from "react";

import type {TFormEvent} from "../components/Interfaces/contacts"

const useForm = (callback:Function, initialState:any) => {
  //New user State
  const [values, setValues] = useState(initialState);
  const onChange = (e:TFormEvent) => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e:TFormEvent) => {
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
