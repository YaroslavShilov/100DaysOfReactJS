import React from 'react';
import styled from 'styled-components';
import Button from "../UI/Button";
import IconPlus from './icons/Plus.png';
import IconMinus from './icons/Minus.png';
import IconReset from './icons/Reset.png';
import IconDownload from './icons/Download.png';
import IconUpload from './icons/Upload.png';
import {connect} from "react-redux";
import {countDownload, countMinus, countPlus, countReset, countUpload} from "../../store/actions/count";
import {URL} from "../../API/URL";

const ButtonsBlock = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 19px;
`


const Buttons = ({onPlus, onMinus, onReset, onDownload, onUpload}) => {
	
	const download = async () => {
		try {
			const res = await fetch(`${URL}numbers`)
			const save = await res.json();
			console.log('success download, you downloaded your saved number')
			onDownload(save)
		} catch (e) {
			console.log(e)
		}
	}
	
	
	return (
		<ButtonsBlock>
			<Button color={'#089C20'} onClick={onPlus}>{IconPlus}</Button>
			<Button color={'#E7AA10'} onClick={onMinus}>{IconMinus}</Button>
			<Button color={'#CF1C1C'} onClick={onReset}>{IconReset}</Button>
			<Button color={'#30D9CF'} onClick={download}>{IconDownload}</Button>
			<Button color={'#9B0F9E'} onClick={onUpload}>{IconUpload}</Button>
		</ButtonsBlock>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		onPlus: () => dispatch(countPlus()),
		onMinus: () => dispatch(countMinus()),
		onReset: () => dispatch(countReset()),
		onDownload: (save) => dispatch(countDownload(save)),
		onUpload: () => dispatch(countUpload()),
	};
}


export default connect(null, mapDispatchToProps)(Buttons);