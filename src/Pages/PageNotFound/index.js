import erro404 from "./erro404.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Container = styled.section`
  padding-top: 84px;
  width: 100%;
  height: 861px;
  background: #222;
  color: white;
  text-align: center;
  h2 {
    padding-block: 1rem;
  }
  img {
    height: 450px;
    padding-bottom: 2rem;
  }
`;

function PageNotFound() {
  return (
    <div>
      <Header />
      <Container>
        <h2>Ops! Conteúdo não localizado!</h2>
        <img src={erro404} alt="Logo de página Não localizada" />
      </Container>
      <Footer />
    </div>
  );
}

export default PageNotFound;
