import { randomCoordinate } from "./randomCoordinate";
import { emitter } from "../emitter";
export function foodGenerator() {
  let count = 1;
  let cache = [];

  const getFood = () => {
    if (cache.length === count) {
      return cache;
    }

    for (let i = cache.length; i < count; i++) {
      cache.push(randomCoordinate());
    }

    return cache;
  };

  const remove = (badCoordinate) => {
    cache = cache.filter((coordinate) => {
      return !(
        badCoordinate[0] === coordinate[0] && badCoordinate[1] === coordinate[1]
      );
    });
  };

  const _increment = () => {
    ++count;
  };

  const _decrement = () => {
    --count;
    cache.length -= 1;
  };

  emitter.on("increment-food", _increment);
  emitter.on("decrement-food", _decrement);

  return { getFood, remove };
}
