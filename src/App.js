import { Container } from "react-bootstrap";
import { Menu } from "./ui_components/Menu";
import { Game } from "./snake/Game";

function App() {
  return (
    <Container className="d-flex flex-sm-column flex-lg-row flex-no-wrap">
      <Menu />
    </Container>
  );
}

const game = new Game();
game.start();
export default App;
