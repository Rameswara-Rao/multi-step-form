import { useContext } from "react";
import { Card, Col, Row, Image, Form, Button, Stack } from "react-bootstrap";
import { FormContext } from "../../context/FormContext";
import "./AddOnsStyle.css";

const AddOns = () => {
  const { formData, updateFormData, nextStep } = useContext(FormContext);
  console.log(formData?.selectPlan?.plan);

  const pickAddOnsData = [
    {
      id: 1,
      addOnName: "Online service",
      addOnDesc: "Access to multiplayer games",
      addOnPriceMonth: "+$1/mo",
      addOnPriceYear: "+10/yr",
    },
    {
      id: 2,
      addOnName: "Larger storage",
      addOnDesc: "Extra 1TB cloud save",
      addOnPriceMonth: "+$2/mo",
      addOnPriceYear: "+20/yr",
    },
    {
      id: 3,
      addOnName: "Customizable profile",
      addOnDesc: "custom theme on your profile",
      addOnPriceMonth: "+$2/mo",
      addOnPriceYear: "+20/yr",
    },
  ];

  return (
    <div>
      <p className="card-header-text">Pick add-ons</p>
      <p className="card-header--secondary-text">
        Add-ons help enhance your gaming experience
      </p>
      {pickAddOnsData.map((data) => {
        return (
          <Card key={data.id} className="mt-3 addOn-card">
            <Card.Body>
              <Stack direction="horizontal">
                <div>
                  <Form.Check // prettier-ignore
                    type={"checkbox"}
                    id={data.id}
                  />
                </div>
                <div className="ms-3">
                  <p className="addOn-name">{data.addOnName}</p>
                  <p className="addOn-desc">{data.addOnDesc}</p>
                </div>
                <div className="ms-auto">
                  <p>
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
    </div>
  );
};

export default AddOns;
