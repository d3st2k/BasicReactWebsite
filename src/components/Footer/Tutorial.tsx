import emotion from '@emotion/styled'

const Tutorial = () => {
  return (
    <Container>
      <ImageContainer><img src="src/assets/images/intro.jfif" alt="" /></ImageContainer>
      <Button><img src="src/assets/images/play.svg" alt="" /></Button>
    </Container>
  );
}

const Container = emotion.div`
  position: relative;
  width: 100%;
  height: 548px;
`

const ImageContainer = emotion.div`
  width: 100%;
  height: 100%;
  z-index: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`

const Button = emotion.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 0 0 15px 15px;
  background-color: #000;
  color: white;
  font-size: 16px;

  & img {
    width: 20px;
    height: 20px;
  }
`
export default Tutorial