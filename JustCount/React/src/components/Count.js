import React from 'react';
import styled from 'styled-components';

const CountBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 300px;
	height: 300px;
	background-color: white;
	border-radius: 4px;
	box-shadow: 20px 20px 50px rgba(0,0,0, .25);
	color: black;
	font-size: 150px;
	text-shadow: 0 4px 4px rgba(0,0,0, .25);
`

const Count = ({number}) => {
	return (
		<CountBlock>
			{number}
		</CountBlock>
	);
}

export default Count