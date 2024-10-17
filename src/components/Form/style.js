import styled from "styled-components";

export const Container = styled.section`
  padding-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;

  h2 {
    margin-bottom: 1rem;
  }

  form {
    width: 100%;
    max-width: 90%;
    background-color: #333333;
    border-radius: 20px;
    padding: 36px 64px;
  }

  div {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  select {
    background-color: white;
    width: 100%;
    padding: 15px 10px;
    margin-bottom: 0.5rem;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 1.125rem;
  }

  input {
    background-color: white;
    width: 100%;
    padding: 15px 10px;
    margin-bottom: 0.5rem;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 1.125rem;
  }

  button {
    background-color: #b71c1c;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1.125rem;
    padding: 24px 28px;
    border: none;
    cursor: pointer;
    color: #fff;
    margin: 0.5rem;

    &:hover {
      background-color: #f44336;
    }
  }
`;
