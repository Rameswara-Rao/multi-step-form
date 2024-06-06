import { Button, Form } from "react-bootstrap";
import "./PersonalInfoStyle.css";
import { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";

const PersonalInfo = () => {
  const { formData, updateFormData, nextStep } = useContext(FormContext);

  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState({
    name: formData?.personInfo?.name || "",
    email: formData?.personInfo?.email || "",
    phone: formData?.personInfo?.phone || "",
  });

  const validate = () => {
    const errors = {};
    if (!formState.name) errors.name = "This field is required";
    if (!formState.email) {
      errors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Invalid email address";
    }
    if (!formState.phone) errors.phone = "This field is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      updateFormData({ personInfo: formState });
      nextStep();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <p className="card-header-text">Personal info</p>
      <p className="card-header--secondary-text">
        Please provide your name, email address, and phone number
      </p>
      <Form className="">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label-text">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            className="form-focus-mod"
            placeholder="e.g. Stephen King"
            value={formState.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label-text">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="form-focus-mod"
            placeholder="e.g. stephenking@lorem.com"
            value={formState.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label-text">Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            className="form-focus-mod"
            value={formState.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
            placeholder="e.g. +1 234 567 890"
            max={10}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>

      <div className="text-end pt-sm-5 mt-5">
        <Button
          onClick={handleSubmit}
          className="next-step px-3"
          disabled={Object.keys(validate()).length !== 0 ? true : false}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
