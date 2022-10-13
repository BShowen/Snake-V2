import { emitter } from "../emitter";
export function snakeSpeed() {
  const weight = 300;
  let speed = 1;

  const increment = () => {
    ++speed;
  };
  const decrement = () => {
    --speed;
  };
  const current = () => {
    return weight / speed;
  };

  emitter.on("increment-speed", increment);
  emitter.on("decrement-speed", decrement);

  return { current };
}
