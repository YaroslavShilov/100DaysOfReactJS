import React from 'react';
import styled from 'styled-components';

const LoaderWrap = styled.div`
	text-align: center;
`;

const LoaderBlock = styled.div`
	position: relative;
	width: 217px;
	height: 217px;
	display: inline-block;
	margin: 0 auto;
	overflow: hidden;
`;

const LoaderItem = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 74px;
	height: 74px;
	border: 22px solid #d2d2cb;
	border-top-color: transparent;
	border-radius: 50%;
	box-sizing: content-box;
	animation: loader 2s linear infinite;
	transform:  translate(-50%, -50%);
	@keyframes loader {
		0 % {transform: translate(-50%, -50%) rotate(0deg);}
		100% {transform: translate(-50%, -50%) rotate(360deg);}
	}
`;


const Loader = (props) => {
	return (
		<LoaderWrap>
			<LoaderBlock>
				<LoaderItem/>
			</LoaderBlock>
		</LoaderWrap>
	);
}

export default Loader