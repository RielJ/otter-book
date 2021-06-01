import React from "react";

const { useState } = require("react");

const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [event?.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };
  return {
    onChange,
    onSubmit,
    setValues,
    values,
  };
};

export default useForm;
