import { useContext, lazy, Suspense } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const SelectPlan = lazy(() => import("./components/selectPlan/SelectPlan"));
const Summary = lazy(() => import("./components/summary/Summary"));
const AddOns = lazy(() => import("./components/addOns/AddOns"));
const PersonalInfo = lazy(() =>
  import("./components/personalInfo/PersonalInfo")
);
const SideNav = lazy(() => import("./components/sideNav/SideNav"));
const ThankYou = lazy(() => import("./components/thankYou/ThankYou"));
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
          <Suspense fallback={<div>Loading...</div>}>
            <SideNav />
          </Suspense>
        </Col>
        <Col className="my-auto" sm={8} md={8} lg={8} xl={9}>
          <Card className="card-render px-3 px-sm-0 px-lg-2">
            <Card.Body>
              <Suspense fallback={<div>Loading...</div>}>
                {renderForm()}
              </Suspense>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
