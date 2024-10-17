import Card from "../Card";
import styled from "styled-components";

const Videos = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 5px;
  margin-top: 0.5rem;
`;

function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let headding = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "vídeos" : "vídeo";
    headding = `${count} ${noun}`;
  }

  return (
    <>
      <h2>{headding}</h2>

      <Videos>
        {videos.map((video) => (
          <Card id={video.id} key={video.id} />
        ))}
      </Videos>
    </>
  );
}

export default VideoList;
