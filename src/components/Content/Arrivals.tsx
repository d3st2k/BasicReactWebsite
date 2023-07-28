import emotion from '@emotion/styled';

const Arrivals = () => {
	return (
		<Container>
			<TextAboutArrivals>
				<Title>NEW ARRIVALS</Title>
				<Text>
					Embrace the essence of style with our latest line of fashion-forward
					garments. Each piece has been meticulously crafted to ignite your
					confidence and elevate your wardrobe to new heights. Discover an array
					of vibrant colors, intricate patterns, and exquisite textures that
					will ignite your imagination.
				</Text>
			</TextAboutArrivals>
			<NewArrival>
				<ImageContainer>
					<img
						src='/src/assets/images/newArrival1.jfif'
						alt=''
					/>
				</ImageContainer>
				<Descprition>
					<Tag>T-Shirt</Tag>
					<Tag>$12.50</Tag>
				</Descprition>
			</NewArrival>
			<NewArrival>
				<ImageContainer>
					<img
						src='/src/assets/images/newArrival2.jfif'
						alt=''
					/>
				</ImageContainer>
				<Descprition>
					<Tag>Jacket</Tag>
					<Tag>$12.50</Tag>
				</Descprition>
			</NewArrival>
			<NewArrival gridArea='2/ 2 / 3 / 3'>
				<ImageContainer>
					<img
						src='/src/assets/images/hoodie.jfif'
						alt=''
					/>
				</ImageContainer>
				<Descprition>
					<Tag>Hoodie</Tag>
					<Tag>$12.50</Tag>
				</Descprition>
			</NewArrival>
			<NewArrival gridArea='2/ 3 / 3 / 4'>
				<ImageContainer>
					<img
						src='/src/assets/images/newArrival4.jfif'
						alt=''
					/>
				</ImageContainer>
				<Descprition>
					<Tag>T-Shirt</Tag>
					<Tag>$12.50</Tag>
				</Descprition>
			</NewArrival>
			<NewArrival gridArea='3/ 2 / 4 / 3'>
				<ImageContainer>
					<img
						src='/src/assets/images/newArrival5.jfif'
						alt=''
					/>
				</ImageContainer>
				<Descprition>
					<Tag>Denim Jacket</Tag>
					<Tag>$12.50</Tag>
				</Descprition>
			</NewArrival>
			<NewArrival gridArea='3/ 3 / 4 / 4'>
				<ImageContainer>
					<img
						src='/src/assets/images/newArrival6.jfif'
						alt=''
					/>
				</ImageContainer>
				<Descprition>
					<Tag>Jacket</Tag>
					<Tag>$12.50</Tag>
				</Descprition>
			</NewArrival>
		</Container>
	);
};

const Container = emotion.div`
  width: 100%;
  height: fit-content;
  margin-top: 144px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 40px;
`;

const TextAboutArrivals = emotion.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-right: 69px;
`;

const Title = emotion.h3`
  font-size: 64px;
  font-family: 'Kanit', sans-serif;
  line-height: 50px;
`;

const Text = emotion.p`
  width: 100%;
  height: fit-content;
  word-wrap: break-word;
  font-size: 16px;
  line-height: normal;
`;

const NewArrival = emotion.div<{ gridArea?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-area: ${(props) => props.gridArea};
`;

const ImageContainer = emotion.div`
  height: 548px;
  width: 100%;

  & img {
    width: 100%;
	  height: 100%;
	  object-fit: cover;
  }
`;

const Descprition = emotion.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 24px;
	font-family: 'Kanit', sans-serif;
	color: #000;
`;

const Tag = emotion.h4`
	margin: 0;
`;
export default Arrivals;
