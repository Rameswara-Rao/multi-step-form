import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };


  return (
    <FormContext.Provider
      value={{ formData, updateFormData, step, setStep }}
    >
      {children}
    </FormContext.Provider>
  );
};
