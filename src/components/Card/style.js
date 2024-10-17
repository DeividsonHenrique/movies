import styled from "styled-components";

export const Cards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Capa = styled.img`
  border-radius: 8px;
  width: 225px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.15);
    border-radius: 10px;
    box-shadow: 0 0 10px #222;
  }
`;

export const Icon = styled.figure`
  width: 30px;
  height: 30px;
  background-color: #00000050;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-right: 5px;
  margin-bottom: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #000000;
    cursor: pointer;
  }
`;
