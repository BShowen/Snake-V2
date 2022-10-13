import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { MenuItem } from "./MenuItem";
import { NumberInput } from "./NumberInput";
import { ToggleSwitch } from "./ToggleSwitch";
export function Menu() {
  return (
    <Container fluid className="border border-1">
      <Form className="d-flex flex-row justify-content-evenly">
        <MenuItem text="Speed">
          <NumberInput type="speed" />
        </MenuItem>
        <MenuItem text="Food Items">
          <NumberInput type="food" />
        </MenuItem>
        <MenuItem text="Portals">
          <ToggleSwitch type="portals" />
        </MenuItem>
        <MenuItem text="Travel through walls">
          <ToggleSwitch type="walls" />
        </MenuItem>
      </Form>
    </Container>
  );
}
