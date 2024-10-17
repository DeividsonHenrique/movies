import { Link } from "react-router-dom";
import { Container } from "./style";

function Header() {
  return (
    <>
      <Container>
        <Link to="/">
          <span>MaiaFlix</span>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Pesquisar</Link>
          <Link to="/favorites">Favoritos</Link>
        </nav>
      </Container>
    </>
  );
}

export default Header;
