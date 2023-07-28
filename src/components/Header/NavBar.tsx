import emotion from "@emotion/styled";

const NavBar = () => {
  return (
    <Bar>
      <Logo />
      <Options>
        <Option>Men</Option>
        <Option>Women</Option>
        <Option>New Arrivals</Option>
        <Option>Contact</Option>
      </Options>
    </Bar>
  );
};

const Bar = emotion.div`
  width: 90%;
  margin-top: 32px;
  // padding: 0 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = emotion.button`
width: 200px;
height: 40px;
background-color: #373737;
border: none;
`;

const Options = emotion.div`
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
gap: 64px;
`;
const Option = emotion.div`
width: fit-content;
height: fit-content;
padding: 0;
display: flex;
align-items: center;
background-color: #0d0d0d;
font-size: 16;
color: #fff;
font-family: Satoshi; // Gjeje fontin mas anej se nuk osht i sakti
font-weight: 400;
letter-spacing: 0em;
text-align: left;
border: none;
cursor: pointer;
`;


export default NavBar;
