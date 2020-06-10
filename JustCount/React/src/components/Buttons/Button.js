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
	margin: 19px;
	padding: 0;
	border-radius: 4px;
	border: 0;
	cursor: pointer;
	transition: all 170ms ease;
	:hover {
		top: -3px;
		box-shadow: 0 4px 0 0 rgba(0,0,0, .9); 
	}
	:active {
		top: 3px;
		box-shadow: 0 0 0 0 rgba(0,0,0, .9), inset 0 0 8px 0 black;
		outline: none;
	}
	:focus {
		outline: none;
	}
`;

const Button = ({color, onClick, children}) => {
	
	return (
		<ButtonBlock style={{backgroundColor: `${color}`}} onClick={onClick}>
			<img src={children} alt={'icon'}/>
		</ButtonBlock>
	);
}

export default Button