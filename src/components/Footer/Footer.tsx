import emotion from '@emotion/styled';
import Tutorial from './Tutorial';
import AboutUs from './AboutUs';

const Footer = () => {
	return (
		<Container>
			<Tutorial />
			<AboutUs />
      <Ownership>Copyright 2023</Ownership>
		</Container>
	);
};

const Container = emotion.div`
  width: 100%;
  height: 1028px;
  background-color: #000;
  color: #D8D8D8;
  display: flex;
  flex-direction: column;
  padding: 56px 64px 0;
`;

const Ownership = emotion.h4`
  width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
`
export default Footer;
