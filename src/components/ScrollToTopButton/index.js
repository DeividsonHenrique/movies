import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9998;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 0;
  border-radius: 50%;
  background-color: #b71c1c90;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 10px #000;
`;

function ScrollToTopButton() {
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return <Button onClick={handleClick}>&#9650;</Button>;
}

export default ScrollToTopButton;
