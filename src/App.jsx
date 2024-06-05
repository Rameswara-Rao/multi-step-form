import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SelectPlan from "./components/selectPlan/SelectPlan";
import Summary from "./components/Summary";
import AddOns from "./components/addOns/AddOns";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import SideNav from "./components/sideNav/SideNav";
import { FormContext } from "./context/FormContext";
import "./App.css"

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
      <Row>
        <Col className="p-0" sm={4} md={3} xl={2}>
          <SideNav />
        </Col>
        <Col sm={8} md={9} xl={10}>
          <Card className="card-render px-5">
            <Card.Body>{renderForm()}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
