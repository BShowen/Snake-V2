import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";
import { emitter } from "../emitter";

export function NumberInput({ type }) {
  let [count, setCount] = useState(1);

  const increment = () => {
    setCount(++count);
    emitter.emit(`increment-${type}`);
  };

  const decrement = () => {
    if (count === 1) return;
    setCount(--count);
    emitter.emit(`decrement-${type}`);
  };

  return (
    <ButtonGroup size="sm">
      <Button variant="primary" onClick={decrement}>
        -
      </Button>
      <Button variant="primary">{count}</Button>
      <Button variant="primary" onClick={increment}>
        +
      </Button>
    </ButtonGroup>
  );
}

export default NumberInput;
