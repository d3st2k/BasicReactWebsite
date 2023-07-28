import emotion from "@emotion/styled";

const Shop = () => {
  return (
    <ShopInfo>
      <LSideOfShop>
        <Title>WEAR THE BEST</Title>
        <ShopDescription>
          Discover the perfect outfit tailored just for you. At our store, we
          curate the finest collection exclusively for our valued customers. We
          take pride in offering the best selection that meets your discerning
          taste.
        </ShopDescription>
      </LSideOfShop>

      <RSideOfShop>
        <RSideUp>
          <InfoAboutShop>
            <NumOfStores>120+</NumOfStores>
            <Text>Stores around the world</Text>
          </InfoAboutShop>
          <StoreDirectionsImage src="src/assets/images/rightArrowCircle.svg"/>
        </RSideUp>
        <Collection>COLLECTION</Collection>
      </RSideOfShop>
    </ShopInfo>
  );
};

const ShopInfo = emotion.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 22px;
`;

const LSideOfShop = emotion.div`
// width: max-content;
display: flex;
flex-direction: column;
gap: 24px;
color: black;
margin: 0;
padding: 0;
`;

const Title = emotion.h2`
width: fit-content;
height: fit-content;
padding: 0;
margin: 0;
font-weight: 600;
font-size: 100px;
color: #000;
font-family: 'Kanit', sans-serif;
font-style: normal;
line-height: 86%;
letter-spacing: -1;
`;

const ShopDescription = emotion.p`
width: 634px;
margin: 0;
font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-wrap: break-word;
`;

const RSideOfShop = emotion.div`
// width: max-content;
display: flex;
flex-direction: column;
`;

const RSideUp = emotion.div`
padding-left: 70px;
display: flex;
flex-direction: row;
gap: 14px;
`;

const InfoAboutShop = emotion.div`
height: fit-content;
display: flex;
flex-direction: row;
gap: 16px;
`;

const NumOfStores = emotion.h3`
height: fit-content;
letter-spacing: 0;
font-family: 'Kanit', sans-serif;
font-size: 64px;
color: #000;
font-weight: 400;
` 

const Text = emotion.p`
display: flex;
justify-content: start;
align-items: center;
width: 123px;
`
const StoreDirectionsImage = emotion.img`
flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Collection = emotion.div`
display: flex;
justify-content: end;
align-items: center;
width: 100%;
height: 86px;
font-family: 'Kanit', sans-serif;
font-size: 100px;
font-weight: 400;
`

export default Shop;
