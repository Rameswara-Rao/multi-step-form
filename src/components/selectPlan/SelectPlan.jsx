import { Card, Col, Row, Image, Form, Button, Stack } from "react-bootstrap";
import { FormContext } from "../../context/FormContext";

import "./SelectPlan.css";
import { useState, useContext } from "react";
import { cardContent } from "../../utils/constants";

const SelectPlan = () => {
  const { formData, updateFormData, nextStep, prevStep } = useContext(FormContext);
  const [plan, setPlan] = useState(formData?.selectPlan?.plan || "monthly");
  const [activePlan, setActivePlan] = useState(formData?.selectPlan?.activePlan||"");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ ...formData, selectPlan: { plan, activePlan } });
    nextStep();
  };

  return (
    <div>
      <p className="card-header-text">Select your plan</p>
      <p className="card-header--secondary-text">
        You have the option of monthly or yearly billing
      </p>
      <Row className="mt-5">
        {cardContent.map((data, ind) => {
          return (
            <Col sm={4} key={ind}>
              <Card
                className={`${
                  activePlan === data.id
                    ? "select-plan-mod-active"
                    : "select-plan-mod"
                } mt-4 mt-md-0`}
                onClick={() => setActivePlan(data.id)}
              >
                <Card.Body>
                  <div className="d-flex flex-sm-column">
                    <div className="mt-2">
                      <Image src={data.imageUrl} alt="" fluid />
                    </div>
                    <div className="ms-3 ms-md-0">
                      <p className="mt-md-5 name-plan">{data.name}</p>
                      <p className="plan-price">
                        {plan === "monthly" ? data.price : data.priceYearly}
                      </p>
                      {plan !== "monthly" ? (
                        <p className="free-offer">{data.free}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="card-mon-year">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <p
                  className={`${
                    plan === "monthly" ? "plan-active" : "plan-inactive"
                  }`}
                >
                  Monthly
                </p>
                <Form.Check
                  type="switch"
                  className="mx-3"
                  id="custom-switch"
                  checked={plan !== "monthly" ? true : false}
                  onChange={(e) =>
                    setPlan(e.target.checked ? "yearly" : "monthly")
                  }
                />
                <p
                  className={`${
                    plan !== "monthly" ? "plan-active" : "plan-inactive"
                  }`}
                >
                  Yearly
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Stack direction="horizontal" className="mt-5 pt-sm-4">
        <Button onClick={prevStep} className="prev-step">
          Go Back
        </Button>
        <Button onClick={handleSubmit} className="next-step ms-auto" disabled={activePlan ? false : true}>
          Next Step
        </Button>
      </Stack>
    </div>
  );
};

export default SelectPlan;
