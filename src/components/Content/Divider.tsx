import emotion from "@emotion/styled";

const Divider = () => {
  return (
    <Container>
      <Button>Shop Now</Button>
      <HLine />
    </Container>
  );
};

const Container = emotion.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Button = emotion.button`
background-color: black;
  color: white;
  width: 153px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 16px;
  font-weight: 400;
`;

const HLine = emotion.hr`
margin-left: 34px;
  border: none;
  border: 2px solid #1f1f1f;
  width: 100%;
`;

export default Divider;
