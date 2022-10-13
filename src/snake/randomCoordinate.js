export function randomCoordinate({ maxX, maxY }) {
  const randomX = () => {
    return Math.floor(Math.random() * maxX);
  };
  const randomY = () => {
    return Math.floor(Math.random() * maxY);
  };

  let x = randomX();
  x -= x % 20;
  let y = randomY();
  y -= y % 20;
  return [x, y];
}
