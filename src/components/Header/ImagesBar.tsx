import emotion from "@emotion/styled";

const ImagesBar = () => {
    return <HeaderImages>
        <StyleImage src="src/assets/images/jasmi.jpg"></StyleImage>
        <StyleImage src="src/assets/images/redDressWoman.jpg"></StyleImage>
        <StyleImage src="src/assets/images/chillWoman.jpg"></StyleImage>
  </HeaderImages>;
};

const HeaderImages = emotion.div`
    position: relative;
    height: 512px;
    width: 110%;
    display: flex;  
    flex-direction: row;
    justify-content: center;
    margin-top: -35px;
    z-index: 0;
    overflow: hidden;
}
`;

const StyleImage = emotion.img`
width: 33.33%;
height: 512px;
object-fit: cover;
`

export default ImagesBar;
