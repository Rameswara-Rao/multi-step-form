import { createContext, useState, useCallback } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const updateFormData = useCallback((newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  }, []);

  const nextStep = useCallback(() => {
    setStep((prevStep) => prevStep + 1);
  }, []);

  const prevStep = useCallback(() => {
    setStep((prevStep) => prevStep - 1);
  }, []);

  return (
    <FormContext.Provider
      value={{ formData, updateFormData, step, setStep, nextStep, prevStep }}
    >
      {children}
    </FormContext.Provider>
  );
};
