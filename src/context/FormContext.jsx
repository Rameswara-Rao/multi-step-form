import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };


  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };


  return (
    <FormContext.Provider
      value={{ formData, updateFormData, step, setStep, nextStep, prevStep }}
    >
      {children}
    </FormContext.Provider>
  );
};
