import { useContext, useState } from "react";
import { Card, Form, Stack, Button } from "react-bootstrap";
import { FormContext } from "../../context/FormContext";
import "./AddOnsStyle.css";

const AddOns = () => {
  const { formData, updateFormData, nextStep } = useContext(FormContext);
  const [selectedAddOn, setSelectedAddOn] = useState(formData.addOns || []);

  const pickAddOnsData = [
    {
      id: "online-service",
      addOnName: "Online service",
      addOnDesc: "Access to multiplayer games",
      addOnPriceMonth: "+$1/mo",
      addOnPriceYear: "+10/yr",
    },
    {
      id: "larger-storage",
      addOnName: "Larger storage",
      addOnDesc: "Extra 1TB cloud save",
      addOnPriceMonth: "+$2/mo",
      addOnPriceYear: "+20/yr",
    },
    {
      id: "customizable-profile",
      addOnName: "Customizable profile",
      addOnDesc: "custom theme on your profile",
      addOnPriceMonth: "+$2/mo",
      addOnPriceYear: "+20/yr",
    },
  ];

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

      <div className="text-end mt-5 pt-sm-4">
        <Button onClick={handleSubmit} className="next-step">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default AddOns;
