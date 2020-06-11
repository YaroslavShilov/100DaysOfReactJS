import React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.button`
	position: relative;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 65px;
	height: 65px;
	margin: 17px 18px;
	padding: 0;
	border-radius: 4px;
	border: 0;
	cursor: pointer;
	transition: all 170ms ease;
	:focus {
		outline: none;
	}
	:hover {
		top: -4px;
		box-shadow: 0 4px 0 0 rgba(0,0,0, .9); 
	}
	:active {
		top: 0;
		box-shadow: 0 0 0 0 rgba(0,0,0, .9), inset 0 0 8px 1px black;
		outline: none;
	}
`;

const Button = ({color, click, children}) => {	
	return (
		<ButtonBlock style={{backgroundColor: `${color}`}} onClick={click}>
			<img src={children} alt={'icon'}/>
		</ButtonBlock>
	);
}

export default Button