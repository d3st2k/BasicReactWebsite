import emotion from '@emotion/styled';
import { Logo } from '../Header/NavBar';

const AboutUs = () => {
	return (
		<Container>
			<Logo />
			<Info>
				<CompanyQuote>
					Embrace the essence of style with our latest line of fashion-forward
					garments. Each piece has been meticulously crafted.
				</CompanyQuote>
				<Fields>
					<Text
						size={20}
						font='Kanit'
					>
						Categories
					</Text>
					<Categories>
						<Text size={16}>Men</Text>
						<Text size={16}>Women</Text>
						<Text size={16}>New Arrival</Text>
						<Text size={16}>Contact</Text>
					</Categories>
				</Fields>
				<Fields>
					<Text
						size={20}
						font='Kanit'
					>
						Company
					</Text>
					<Categories>
						<Text size={16}>About</Text>
						<Text size={16}>Blog</Text>
						<Text size={16}>Contact</Text>
					</Categories>
				</Fields>
			</Info>
		</Container>
	);
};

const Container = emotion.div`
  height: 290px;
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: none;
  border-top: 2px solid #222;
  border-bottom: 2px solid #222;
  padding: 40px 0 40px;
`;

const Info = emotion.div`
  width: 85%;
  height: 124px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CompanyQuote = emotion.h4`
  width: 347px;
  height: 100%;
  word-wrap: break-word;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const Fields = emotion.div`
  width: 217px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: top;
  gap: 32px;
`;

const Text = emotion.h4<{ size: number; font?: string }>`
  height: fit-content;
  width: max-content;
	font-size: ${(props) => props.size}px;
	font-family: ${(props) => props.font}, sans-serif;
	color: #fff;
`;

const Categories = emotion.div`
  margin-top: 7.5px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
export default AboutUs;
