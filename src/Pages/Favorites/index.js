import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import React from "react";
import styled from "styled-components";

const FavoritesDiv = styled.section`
  padding-top: 88px;
`;

function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Container>
        <FavoritesDiv>
          <h2>Meus Favoritos</h2>
          {<VideoList videos={favorite} emptyHeading={"Sem Favoritos"} />}
        </FavoritesDiv>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
