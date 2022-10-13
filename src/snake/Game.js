import { draw } from "./draw";
import { Snake } from "./Snake";
import { isArrowKey } from "./isArrowKey";
import { foodGenerator } from "./foodGenerator";
import { portalGenerator } from "./portalGenerator";
import { snakeSpeed } from "./snakeSpeed";
import { emitter } from "../emitter";

export function Game() {
  this.isPaused = false;
  let interval;
  const speed = snakeSpeed();
  let travelThroughWalls = false;
  const board = {
    height: document.getElementById("snakeCanvas").height,
    width: document.getElementById("snakeCanvas").width,
  };
  const portals = portalGenerator.getPortals({
    maxX: board.width,
    maxY: board.height,
  });
  const food = foodGenerator({ maxX: board.width, maxY: board.height });
  let usePortals = false;
  const snake = new Snake(board);

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
    switch (this.isPaused) {
      case true:
        interval = setInterval(_draw, speed.current());
        this.isPaused = false;
        break;
      case false:
        clearInterval(interval);
        interval = undefined;
        this.isPaused = true;
        break;
    }
  };

  emitter.on("play-pause", _toggle);

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
    if (this.isPaused) return;
    snake.setDirection(direction);
  };

  const keyDownHandler = (e) => {
    // You can pause the game ONLY once the game has begun.
    if (e.code === "Enter" && this.isPaused !== undefined) {
      _toggle();
      return;
    }

    const [isValid, keyDown] = isArrowKey(e.key);
    if (isValid) {
      // this.isPaused should longer be undefined because the game has started.
      if (this.isPaused === undefined) this.isPaused = false;

      _setSnakeDirection(keyDown);
    }
  };

  document.addEventListener("keydown", keyDownHandler.bind(this));

  return { start };
}
