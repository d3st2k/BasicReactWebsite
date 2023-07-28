import emotion from '@emotion/styled';

const Category = () => {
	return (
		<Container>
			<ClothingSection gridArea='1 / 1 / 2 / 3'>
				<img
					src='src/assets/images/hoodie.jfif'
					alt=''
				/>
				<Button>
					Hoodies
					<img
						src='src/assets/images/upArrow.svg'
						alt=''
					/>
				</Button>
			</ClothingSection>
			<ClothingSection gridArea='2 / 1 / 3 / 2'>
				<img
					src='src/assets/images/t-shirt.jfif'
					alt=''
				/>
				<Button>
					T-Shirt Collection
					<img
						src='src/assets/images/upArrow.svg'
						alt=''
					/>
				</Button>
			</ClothingSection>
			<ClothingSection gridArea='2 / 2 / 3 / 3'>
				<img
					src='src/assets/images/jeans.jfif'
					alt=''
				/>
				<Button>
					Jeans
					<img
						src='src/assets/images/upArrow.svg'
						alt=''
					/>
				</Button>
			</ClothingSection>
			<ClothingSection gridArea='1 / 3 / 3 / 4'>
				<img
					src='src/assets/images/specialWear.jfif'
					alt=''
				/>
				<Button>
					Special Wear
					<img
						src='src/assets/images/upArrow.svg'
						alt=''
					/>
				</Button>
			</ClothingSection>
		</Container>
	);
};

const Container = emotion.div`
	margin-top: 48px;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 366px);
  gap: 32px;
`;

const ClothingSection = emotion.div<{ gridArea: string }>`
    position: relative;
    grid-area: ${(props) => props.gridArea};

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }
`;

const Button = emotion.button`
	width: max-content;
	padding: 11px 16px 11px 24px;
	height: 46px;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	margin: 0 0 20px 20px;
	border: none;
	border-radius: 50px;
	background-color: #fff;
	color: #000;
	font-size: 16px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	& img {
		width: 24px;
		height: 24px;
		object-fit: cover;
	}
`;
export default Category;
