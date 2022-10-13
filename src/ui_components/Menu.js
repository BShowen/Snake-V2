import { Form, Row, Col, Container } from "react-bootstrap";
import { MenuItem } from "./MenuItem";
import { NumberInput } from "./NumberInput";
import { ToggleSwitch } from "./ToggleSwitch";
export function Menu() {
  return (
    <Container fluid className="p-1 m-0 menu-container bg-light rounded">
      <Form>
        <Row>
          <Col className="col-6 col-lg-3">
            <MenuItem text="Speed">
              <NumberInput type="speed" />
            </MenuItem>
          </Col>
          <Col className="col-6 col-lg-3">
            <MenuItem text="Food">
              <NumberInput type="food" />
            </MenuItem>
          </Col>
          <Col className="col-6 col-lg-3">
            <MenuItem text="Portals">
              <ToggleSwitch type="portals" />
            </MenuItem>
          </Col>
          <Col className="col-6 col-lg-3">
            <MenuItem text="Wall wrap">
              <ToggleSwitch type="walls" />
            </MenuItem>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
