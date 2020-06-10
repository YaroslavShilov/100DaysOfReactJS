import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
	padding: 40px 0;
	color: white;
	text-align:center;
`;

const HomePage = () => {
	return (
		<MainBlock>
			<h1>Hello World!!!</h1>
			<h2>I'm homePage</h2>
		</MainBlock>
	);
}

export default HomePage