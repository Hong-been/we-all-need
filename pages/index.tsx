import type { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
	background-color: navy;
	padding: 10px;
	margin-top: 10px;
	text-align: center;
	font-size: 10px;
	color: ${(props) => props.theme.colors.textAlternative};
`;

const LargerFontContainer = styled(Container)`
	font-size: 28px;
`;
const ReversedContainer = (props) => {
	return <Container {...props} children={props.children.split("").reverse()} />;
};

const Home: NextPage = () => {
	return (
		<div>
			<LargerFontContainer>Home</LargerFontContainer>
			<Container as={ReversedContainer}>Reversed Second</Container>
		</div>
	);
};

export default Home;
