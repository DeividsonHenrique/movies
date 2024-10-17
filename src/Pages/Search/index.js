import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import videos from "../../json/videos.json";
import SearchVideoList from "../../components/SearchVideoList";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import styled from "styled-components";

const ContainerSearch = styled.section`
  width: 100%;
  min-height: 781px;
  padding-top: 88px;
  display: flex;
  flex-direction: column;
`;

function Search() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Container>
        <ContainerSearch>
          <SearchVideoList videos={videos} />
        </ContainerSearch>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
