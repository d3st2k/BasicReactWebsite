import emotion from '@emotion/styled';


const BrandBar = () => {
  return (
      <Brands>
          <BrandName>LEVI'S</BrandName>
          <Circle></Circle>
          <BrandName>BOSS</BrandName>
          <Circle></Circle>
          <BrandName>H&M</BrandName>
          <Circle></Circle>
          <BrandName>NIKE</BrandName>
          <Circle></Circle>
          <BrandName>DESIGNER</BrandName>
          <Circle></Circle>
          <BrandName>ZARA</BrandName>
          <Circle></Circle>
          <BrandName>GUCCI</BrandName>
          <Circle></Circle>
      </Brands>
  )
}

const Brands = emotion.div`
    width: 105%;
    height: 100px;
    padding: 29px 0;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #E86D2A;
    z-index: 1;
`

const BrandName = emotion.h3`
margin: 0;
padding: 0;
font-weight: 400;
font-style: italic;
font-size: 64px;
align-items: center;
color: white;
`

const Circle = emotion.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;    
`

export default BrandBar