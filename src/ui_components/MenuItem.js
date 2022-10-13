import Form from "react-bootstrap/Form";

export function MenuItem({ children, text }) {
  return (
    <Form.Group
      className="d-flex flex-row gap-2 p-1 align-items-center justify-content-center m-1"
      controlId={text}
    >
      <Form.Label className="m-0">{text}</Form.Label>
      {children}
    </Form.Group>
  );
}
