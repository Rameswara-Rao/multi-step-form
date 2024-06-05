import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const Summary = () => {
  const { formData, updateFormData, nextStep } = useContext(FormContext);
  
  return (
    <div>
      <p className="card-header-text">Pick add-ons</p>
      <p className="card-header--secondary-text">
        Add-ons help enhance your gaming experience
      </p>

      
    </div>
  );
};

export default Summary;
