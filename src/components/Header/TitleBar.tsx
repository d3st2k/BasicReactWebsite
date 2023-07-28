import emotion from "@emotion/styled";

const TitleBar = () => {
  return <Bar>
    <Title>EXPRESS</Title>
    <Title color='transparent'>YOURSELF</Title>
  </Bar>;
};

const Bar = emotion.div`
    margin-left: 60px;
    width: 90%;
    height: 256px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const Title = emotion.h1<{ color?: string; }>`
width: 100%;
height: 120px;
display: flex;
align-items: center;
color: ${(props) => props.color || 'white'};
font-weight: 600;
font-size: 140px;
z-index: 1;
-webkit-text-stroke: 1.5px #fff;  
`;

export default TitleBar;
