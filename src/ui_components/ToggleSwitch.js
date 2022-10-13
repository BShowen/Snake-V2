import Form from "react-bootstrap/Form";
import { emitter } from "../emitter";

export function ToggleSwitch({ type }) {
  const clickHandler = () => {
    emitter.emit(`toggle-${type}`);
  };
  return (
    <Form.Check
      className="d-flex align-items-center"
      type="switch"
      onClick={clickHandler}
    />
  );
}
