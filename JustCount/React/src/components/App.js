import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Count from "./Count";
import Buttons from "./Buttons/Buttons";

const AppBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding: 40px;
	font-family: 'Roboto', sans-serif;
	background: linear-gradient(180deg, #0837B0 0%, #021E66 100%);
`

const App = ({data}) => {
	
	const [state, setState] = useState({
		count: 0
	});
	
	useEffect(() => {
		setState({
			...state,
			count: data.count
		})
		// eslint-disable-next-line
	}, [])
	
	const onPlus = () => setState({...state, count: ++state.count})
	const onMinus = () => setState({...state, count: --state.count})
	const onReset = () => setState({...state, count: 0})
	
	return (
		<AppBlock>
			<Count number={state.count}/>
			<Buttons onPlus={onPlus} onMinus={onMinus} onReset={onReset}/>
		</AppBlock>
	);
}

export default App