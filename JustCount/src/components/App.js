import React from 'react';
import styled from 'styled-components';
import Count from "./Count";
import Buttons from "./Buttons/Buttons";
import {connect} from "react-redux";

const AppBg = styled.div`
	min-height: 100vh;
	padding: 40px;
	background: linear-gradient(180deg, #0837B0 0%, #021E66 100%);
`;

const AppBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 320px;
	margin: 0 auto;
	font-family: 'Roboto', sans-serif;
`



const App = ({count}) => {
	
	return (
		<AppBg>
			<AppBlock>
				<Count number={count}/>
				<Buttons/>
			</AppBlock>
		</AppBg>
	);
}

function mapStateToProps(state) {
	return {
		count: state.count
	};
}
export default connect(mapStateToProps)(App);
