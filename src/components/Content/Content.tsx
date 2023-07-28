import emotion from '@emotion/styled';

import Shop from './Shop';
import Divider from './Divider';
import Category from './Category';
import Arrivals from './Arrivals';

const Content = () => {
	return (
		<Container>
			<Shop />
			<Divider />
			<Category />
			<Arrivals />
		</Container>
	);
};

const Container = emotion.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3344px;
  padding: 120px 64px;
`;

export default Content;
