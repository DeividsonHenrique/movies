import styled from "styled-components";

const BannerDiv = styled.div`
  width: 100%;
  height: 347px;
  background-image: url(/public/images/banner-home.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 68px;
`;

function Banner({ image }) {
  return (
    <BannerDiv
      style={{ backgroundImage: `url('/images/banner-${image}.png')` }}
    ></BannerDiv>
  );
}

export default Banner;
