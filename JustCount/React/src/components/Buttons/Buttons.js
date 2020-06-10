import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import IconPlus from './icons/Plus.png';
import IconMinus from './icons/Minus.png';
import IconReset from './icons/Reset.png';

const ButtonsBlock = styled.div`
	display: flex;
	justify-content: center;
`


const Buttons = ({onPlus, onMinus, onReset}) => {
	return (
		<ButtonsBlock>
			<Button color={'#089C20'} onClick={onPlus}>{IconPlus}</Button>
			<Button color={'#E7AA10'} onClick={onMinus}>{IconMinus}</Button>
			<Button color={'#CF1C1C'} onClick={onReset}>{IconReset}</Button>
		</ButtonsBlock>
	);
}

export default Buttons