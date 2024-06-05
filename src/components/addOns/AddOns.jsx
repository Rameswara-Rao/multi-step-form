import { useContext, useState } from "react";
import { Card, Form, Stack, Button } from "react-bootstrap";
import { FormContext } from "../../context/FormContext";
import "./AddOnsStyle.css";
import { pickAddOnsData } from "../../utils/constants";

const AddOns = () => {
  const { formData, updateFormData, nextStep, prevStep } =
    useContext(FormContext);
  const [selectedAddOn, setSelectedAddOn] = useState(formData.addOns || []);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedAddOn((prevSelectedAddOns) => {
      if (checked) {
        return [...prevSelectedAddOns, id];
      } else {
        return prevSelectedAddOns.filter((addOn) => addOn !== id);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ ...formData, addOns: selectedAddOn });
    nextStep();
  };

  return (
    <div>
      <p className="card-header-text">Pick add-ons</p>
      <p className="card-header--secondary-text">
        Add-ons help enhance your gaming experience
      </p>
      {pickAddOnsData.map((data) => {
        return (
          <Card
            key={data.id}
            className={`mt-3 addOn-card ${
              selectedAddOn.includes(data.id) ? "addOn-card-active" : ""
            }`}
          >
            <Card.Body>
              <Stack direction="horizontal">
                <div>
                  <Form.Check
                    type={"checkbox"}
                    id={data.id}
                    checked={selectedAddOn.includes(data.id)}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="ms-3">
                  <p className="addOn-name">{data.addOnName}</p>
                  <p className="addOn-desc">{data.addOnDesc}</p>
                </div>
                <div className="ms-auto">
                  <p className="addon-price">
                    {formData?.selectPlan?.plan === "monthly"
                      ? data.addOnPriceMonth
                      : data.addOnPriceYear}
                  </p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
        );
      })}

      <Stack direction="horizontal" className="mt-5 pt-sm-4">
        <Button onClick={prevStep} className="prev-step">
          Go Back
        </Button>
        <Button onClick={handleSubmit} className="next-step ms-auto">
          Next Step
        </Button>
      </Stack>
    </div>
  );
};

export default AddOns;
