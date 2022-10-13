import { draw } from "./draw";
import { Snake } from "./Snake";
import { isArrowKey } from "./isArrowKey";
import { foodGenerator } from "./foodGenerator";
import { portals } from "./portals";
import { snakeSpeed } from "./snakeSpeed";
import { emitter } from "../emitter";

export function Game() {
  let isPaused;
  let interval;
  const speed = snakeSpeed();
  let travelThroughWalls = false;
  const snake = new Snake();
  const food = foodGenerator();
  let usePortals = false;

  emitter.on("toggle-portals", () => {
    usePortals = !usePortals;
  });

  emitter.on("toggle-walls", () => {
    travelThroughWalls = !travelThroughWalls;
  });

  const start = () => {
    interval = setInterval(_draw, speed.current());
  };

  const _toggle = () => {
    // eslint-disable-next-line default-case
    switch (isPaused) {
      case true:
        interval = setInterval(_draw, speed.current());
        isPaused = false;
        break;
      case false:
        clearInterval(interval);
        interval = undefined;
        isPaused = true;
        break;
    }
  };

  const _draw = () => {
    const portalCoords = usePortals ? portals : [[], []];
    snake.move(food, portalCoords, travelThroughWalls);
    try {
      draw(
        { coords: portalCoords, fillColor: "red" },
        { coords: food.getFood(), fillColor: "green" },
        { coords: snake.getBody(), fillColor: "orange", travelThroughWalls }
      );
    } catch (e) {
      clearInterval(interval);
      alert(e.message);
    }
  };

  const _setSnakeDirection = (direction) => {
    // Can change direction only when game is not paused.
    if (isPaused) return;
    snake.setDirection(direction);
  };

  document.addEventListener("keydown", (e) => {
    // You can pause the game ONLY once the game has begun.
    if (e.code === "Enter" && isPaused !== undefined) {
      _toggle();
      return;
    }

    const [isValid, keyDown] = isArrowKey(e.key);
    if (isValid) {
      // isPaused should longer be undefined because the game has started.
      if (isPaused === undefined) isPaused = false;

      _setSnakeDirection(keyDown);
    }
  });

  return { start };
}
