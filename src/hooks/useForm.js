import { useState } from "react";

export default function useForm(initialValues, validateOnChanges = false, validateFn) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChanges) validateFn({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    handleInputChange,
    values,
    setValues,
    errors,
    setErrors,
    resetForm,
  };
}
