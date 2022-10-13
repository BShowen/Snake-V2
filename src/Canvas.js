import { useSwipeable } from "react-swipeable";
import { emitter } from "./emitter";
export function Canvas() {
  const width = window.innerWidth - (window.innerWidth % 20);
  const height = window.innerHeight - (window.innerHeight % 20) - 200;

  const config = {
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  };
  const handlers = useSwipeable({
    onSwipedUp: () => emitter.emit("up"),
    onSwipedDown: () => emitter.emit("down"),
    onSwipedLeft: () => emitter.emit("left"),
    onSwipedRight: () => emitter.emit("right"),
    ...config,
  });

  const testTap = () => {
    emitter.emit("play-pause");
  };

  return (
    <canvas
      {...handlers}
      onClick={testTap}
      width={width}
      height={height}
      id="snakeCanvas"
      style={{ border: "1px solid black" }}
    ></canvas>
  );
}
