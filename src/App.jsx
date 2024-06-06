import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import SelectPlan from "./components/selectPlan/SelectPlan";
import AddOns from "./components/addOns/AddOns";
import Summary from "./components/summary/Summary";
import ThankYou from "./components/thankYou/ThankYou";
import SideNav from "./components/sideNav/SideNav";

import { FormContext } from "./context/FormContext";
import "./App.css";

const App = () => {
  const { step } = useContext(FormContext);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      case 5:
        return <ThankYou />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <Container className="app" fluid>
      <Row className="stepper-form">
        <Col className="p-0" sm={4} md={4} lg={4} xl={3}>
          <SideNav />
        </Col>
        <Col className="my-auto" sm={8} md={8} lg={8} xl={9}>
          <Card className="card-render px-3 px-sm-0 px-md-3 px-lg-4 px-xl-5">
            <Card.Body>{renderForm()}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
