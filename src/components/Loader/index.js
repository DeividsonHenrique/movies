import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }

    100%{
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderCircle = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #b71c1c;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.5s linear infinite;
  text-align: center;
`;

function Loader() {
  return (
    <Container>
      <LoaderCircle></LoaderCircle>
    </Container>
  );
}

export default Loader;
