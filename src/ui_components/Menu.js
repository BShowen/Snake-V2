import Form from "react-bootstrap/Form";
import { MenuItem } from "./MenuItem";
import { NumberInput } from "./NumberInput";
import { ToggleSwitch } from "./ToggleSwitch";
export function Menu() {
  return (
    <Form>
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
  );
}
