import styled from "styled-components";

export const Container = styled.header`
  background-color: #000000;
  border-bottom: 2px solid #f44336;
  position: fixed;
  top: 0;
  width: 100%;
  height: 68px;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: space-around;
  z-index: 9999;

  span {
    font-size: 2rem;
    color: #b71c1c;
    font-weight: 500;
  }

  nav {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
    padding-inline: 0.5rem;
  }

  @media (max-width: 480px) {
    span {
      font-size: 1.5rem;
    }
    a {
      font-size: 0.95rem;
      padding-inline: 0.5rem;
    }
  }

  @media (max-width: 380px) {
    span {
      font-size: 1.5rem;
    }
    a {
      font-size: 0.75rem;
    }
  }
`;
