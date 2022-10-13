export const draw = (() => {
  let _contextCache = null;

  const _setContextCache = () => {
    const canvas = document.getElementById("snakeCanvas");
    if (canvas) {
      _contextCache = canvas.getContext("2d");
    }
  };

  const _clear = function () {
    _contextCache.fillStyle = "white";
    _contextCache.fillRect(0, 0, 1000, 1000);
  };

  const draw = function (...drawObjects) {
    if (!_contextCache) _setContextCache();

    _clear();
    for (const drawObject of drawObjects) {
      const { coords, fillColor, travelThroughWalls } = drawObject;
      if (!travelThroughWalls) {
        const outOfBounds = coords.some((coord) => {
          const [x, y] = coord;
          return x >= 1000 || y >= 1000 || x < 0 || y < 0;
        });

        if (outOfBounds) {
          throw new Error("Don't hit the walls!");
        }
      }

      // eslint-disable-next-line no-loop-func
      coords.forEach((coord) => {
        const [x, y] = coord;
        _contextCache.fillStyle = fillColor;
        _contextCache.fillRect(x, y, 20, 20);
      });
    }
  };

  return draw;
})();
