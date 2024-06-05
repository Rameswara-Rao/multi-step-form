import { useContext } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SelectPlan from "./components/SelectPlan";
import Summary from "./components/Summary";
import AddOns from "./components/AddOns";
import PersonalInfo from "./components/PersonalInfo";
import SideNav from "./components/SideNav";
import { FormContext } from "./context/FormContext";

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
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={3}>
          <SideNav />
        </Col>
        <Col md={9}>
          <div className="p-4 bg-white rounded shadow-sm">
            {renderForm()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
