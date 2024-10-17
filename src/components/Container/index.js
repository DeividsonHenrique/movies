import styled from "styled-components";

const ContainerSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #191919;
  color: white;
  padding-bottom: 1.5rem;
  text-align: center;
  padding-inline: 2rem;
  overflow: hidden;
`;

function Container({ children }) {
  return <ContainerSection>{children}</ContainerSection>;
}

export default Container;
