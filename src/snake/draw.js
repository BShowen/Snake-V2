export const draw = (() => {
  let _contextCache = null;
  let _height;
  let _width;

  const _setContextCache = () => {
    const canvas = document.getElementById("snakeCanvas");
    if (canvas) {
      _contextCache = canvas.getContext("2d");
      _height = canvas.height;
      _width = canvas.width;
    }
  };

  const _clear = function () {
    _contextCache.fillStyle = "white";
    _contextCache.fillRect(0, 0, _width, _height);
  };

  const draw = function (...drawObjects) {
    if (!_contextCache) _setContextCache();

    _clear();
    for (const drawObject of drawObjects) {
      const { coords, fillColor, travelThroughWalls } = drawObject;
      if (!travelThroughWalls) {
        // eslint-disable-next-line no-loop-func
        const outOfBounds = coords.some((coord) => {
          const [x, y] = coord;
          return x >= _width || y >= _height || x < 0 || y < 0;
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
