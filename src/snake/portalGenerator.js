import { randomCoordinate } from "./randomCoordinate";

export const portalGenerator = (() => {
  let cache = [];

  function getPortals({ maxX, maxY }) {
    if (cache.length > 0) return cache;

    cache.push(randomCoordinate({ maxX, maxY }));
    cache.push(randomCoordinate({ maxX, maxY }));

    return cache;
  }

  return { getPortals };
})();
