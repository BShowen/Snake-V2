import Form from "react-bootstrap/Form";

export function MenuItem({ children, text }) {
  return (
    <Form.Group className="d-flex flex-row" controlId={text}>
      <Form.Label className="h-100 align-items-center d-flex">
        {text}
      </Form.Label>
      {children}
    </Form.Group>
  );
}
