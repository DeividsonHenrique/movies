import styled from "styled-components";

const FooterDiv = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  border-top: #f44336;
  padding-block: 1rem;

  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
`;

function Footer() {
  return (
    <>
      <FooterDiv>
        <h2>MaiaFlix &copy; Desenvolvido por Henry</h2>
      </FooterDiv>
    </>
  );
}

export default Footer;
