import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import IconPlus from './icons/Plus.png';
import IconMinus from './icons/Minus.png';
import IconReset from './icons/Reset.png';
import IconDownload from './icons/Download.png';
import IconUpload from './icons/Upload.png';
import {connect} from "react-redux";
import {countDownload, countMinus, countPlus, countReset, countUpload} from "../../redux/actions/count";

const ButtonsBlock = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 19px;
`


const Buttons = ({onPlus, onMinus, onReset, onDownload, onUpload}) => {
	return (
		<ButtonsBlock>
			<Button color={'#089C20'} click={onPlus}>{IconPlus}</Button>
			<Button color={'#E7AA10'} click={onMinus}>{IconMinus}</Button>
			<Button color={'#CF1C1C'} click={onReset}>{IconReset}</Button>
			<Button color={'#30D9CF'} click={onDownload}>{IconDownload}</Button>
			<Button color={'#9B0F9E'} click={onUpload}>{IconUpload}</Button>
		</ButtonsBlock>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		onPlus: () => dispatch(countPlus()),
		onMinus: () => dispatch(countMinus()),
		onReset: () => dispatch(countReset()),
		onDownload: () => dispatch(countDownload()),
		onUpload: () => dispatch(countUpload()),
	};
}


export default connect(null, mapDispatchToProps)(Buttons);