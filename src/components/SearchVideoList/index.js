import VideoList from "../../components/VideoList";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import styled from "styled-components";

const Container = styled.section`
  min-width: 280px;
  max-width: 1150px;
  margin: 0 auto;

  input {
    width: 320px;
    padding: 15px 10px;
    margin-block: 0.5rem;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 1.125rem;
  }
`;

function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("Geografia");
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 750);
  }, []);

  return (
    <Container>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem videos sobre ${searchText}`}
        />
      )}
    </Container>
  );
}

export default SearchVideoList;
