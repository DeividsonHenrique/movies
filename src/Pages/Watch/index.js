import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PageNotFound from "../PageNotFound";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import styled from "styled-components";

const ContainerWatch = styled.section`
  padding-top: 84px;
  height: 78.59vh;

  iframe {
    border-radius: 20px;
    box-shadow: 0px 0px 10px black;
  }

  @media (max-width: 1024px) {
    iframe {
      width: 100%;
      aspect-ratio: 16/9;
    }
  }
`;

function Watch() {
  const params = useParams();
  const video = videos.find((video) => {
    return video.id === params.id;
  });
  if (!video) {
    return <PageNotFound />;
  }
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Container>
        <ContainerWatch>
          <h1>Assistir</h1>
          <iframe
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </ContainerWatch>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;
