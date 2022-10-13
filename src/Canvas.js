export function Canvas() {
  const width = window.innerWidth - (window.innerWidth % 20);
  const height = window.innerHeight - (window.innerHeight % 20) - 200;

  return (
    <canvas
      width={width}
      height={height}
      id="snakeCanvas"
      style={{ border: "1px solid black" }}
    ></canvas>
  );
}
