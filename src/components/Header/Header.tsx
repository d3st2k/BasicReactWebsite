import emotion from "@emotion/styled";
import NavBar from "./NavBar";
import TitleBar from "./TitleBar";
import ImagesBar from "./ImagesBar";
import BrandBar from "./BrandBar";

const Header = () => {
  return (
    <Part>
      <NavBar />
      <HLine />
      <TitleBar />
      <ImagesBar />
      <BrandBar />
    </Part>
  );
};

const Part = emotion.div`
background-color: #0d0d0d;
height: 873px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const HLine = emotion.hr`
    width: 90%;
    margin: 32px 0;
    // padding: 0 64px;
    border: none;
    border: 2px solid #222222;
`;

export default Header;
