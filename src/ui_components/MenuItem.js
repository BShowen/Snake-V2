import Form from "react-bootstrap/Form";

export function MenuItem({ children, text }) {
  return (
    <Form.Group
      className="d-flex flex-row justify-content-between"
      controlId={text}
    >
      <Form.Label>{text}</Form.Label>
      {children}
    </Form.Group>
  );
}
