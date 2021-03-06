import React, { useState } from "react";

import { FormStyle, Field, InputSubmit, Error } from "../../styles/form";

import FormHook from "../../utils/formHooks";

const ContactForm = ({ AddContact }) => {
  const [error, setError] = useState("");

  const { onChange, values } = FormHook(AddContact, {
    name: "",
    nickname: "",
    email: "",
  });

  const CheckValues = (e) => {
    e.preventDefault();
    if (values.name.trim() === "" || values.nickname.trim() === "" || values.email.trim() === "") {
      setError("All Fields are required");
      return;
    }
    setError("");
    AddContact(values);
  };

  return (
    <>
      <FormStyle onSubmit={CheckValues} noValidate>
        <h1>New Contact</h1>
        <Field>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="&#x1F464; FullName"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </Field>

        <Field>
          <label htmlFor="username">NickName</label>
          <input
            type="text"
            id="nickname"
            placeholder="&#x1F464; NickName"
            name="nickname"
            value={values.nickname}
            onChange={onChange}
          />
        </Field>
        <Field>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="email"
            placeholder="&#x1F464; Email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </Field>

        {error.trim() === "" ? null : <Error>{error}</Error>}

        <InputSubmit type="submit" value="Create" />
      </FormStyle>
    </>
  );
};

export default ContactForm;
