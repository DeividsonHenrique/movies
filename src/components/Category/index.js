import videos from "../../json/videos.json";
import styled from "styled-components";

export const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
];

const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* aula 14 */
  min-width: 280px;
  max-width: 1200px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    width: 100%;
    height: 150px;
    align-items: center;
  }

  h2 {
    padding-block: 1rem;
  }
`;

export function filterCategory(id) {
  return videos.filter((video) => video.category === categories[id]);
}

function Category({ category, children }) {
  return (
    <Container>
      <h2>{category}</h2>
      <div>{children}</div>
    </Container>
  );
}

export default Category;
