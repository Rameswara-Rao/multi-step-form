import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/FormContext";
import { Card, Stack, Button } from "react-bootstrap/";
import "./SummaryStyle.css";
import { pickAddOnsData, cardContent } from "../../utils/constants";

const Summary = () => {
  const { formData, nextStep, prevStep } = useContext(FormContext);
  const [primaryPlan, setPrimaryPlan] = useState({});
  const [addOnSummary, setAddOnSummary] = useState([]);

  useEffect(() => {
    setPrimaryPlan(
      cardContent.filter((e) => e.id === formData.selectPlan.activePlan)[0]
    );
    setAddOnSummary(
      formData.addOns.map((e) => {
        const res = pickAddOnsData.filter((pickData) => pickData.id === e);
        return res[0];
      })
    );
  }, []);

  const calculateTotal = () => {
    const primaryPlanPrice =
      formData?.selectPlan.plan === "yearly"
        ? primaryPlan.priceYearly
        : primaryPlan.price;

    const addOnPrice = addOnSummary?.reduce((acc, curr) => {
      const price =
        formData?.selectPlan.plan === "yearly"
          ? curr.addOnPriceYear
          : curr.addOnPriceMonth;
      const numericPrice = parseInt(price.replace(/[^\d]/g, ""), 10); // Extract numeric value and parse it
      return acc + numericPrice;
    }, 0);

    return (
      (addOnPrice || 0) + parseInt(primaryPlanPrice?.replace(/[^\d]/g, ""), 10)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <p className="card-header-text">Pick add-ons</p>
      <p className="card-header--secondary-text">
        Add-ons help enhance your gaming experience
      </p>

      <Card className="summary-card">
        <Card.Body>
          <Stack className="plan-name" direction="horizontal">
            <div>
              <p className="">
                {primaryPlan?.name} (
                {formData?.selectPlan.plan === "yearly" ? "Yearly" : "Monthly"})
              </p>
              <Button className="btn-link-mod" variant="link">Change</Button>
            </div>
            <div className="ms-auto">
              <p>
                {formData?.selectPlan.plan === "yearly"
                  ? primaryPlan?.priceYearly
                  : primaryPlan?.price}
              </p>
            </div>
          </Stack>
          <hr className="hr" />
          {addOnSummary &&
            addOnSummary?.map((data) => {
              return (
                <Stack
                  className="addon-text"
                  key={data?.id}
                  direction="horizontal"
                >
                  <div>
                    <p>{data?.addOnName}</p>
                  </div>
                  <div className="ms-auto">
                    <p>
                      {formData.selectPlan.plan === "yearly"
                        ? data?.addOnPriceYear
                        : data?.addOnPriceMonth}
                    </p>
                  </div>
                </Stack>
              );
            })}
        </Card.Body>
      </Card>
      <Stack className="addon-text mx-4 mt-4" direction="horizontal">
        <div>
          <p>
            Total (per{" "}
            {formData.selectPlan.plan === "yearly" ? "year" : "month"})
          </p>
        </div>
        <div className="ms-auto">
          <p className="total-amount">
            ${calculateTotal()}/
            {formData.selectPlan.plan === "yearly" ? "yr" : "mon"}
          </p>
        </div>
      </Stack>

      <Stack direction="horizontal" className="mt-4 pt-sm-4">
        <Button onClick={prevStep} className="prev-step">
          Go Back
        </Button>
        <Button onClick={handleSubmit} className="next-step ms-auto px-4">
          Confirm
        </Button>
      </Stack>
    </div>
  );
};

export default Summary;
