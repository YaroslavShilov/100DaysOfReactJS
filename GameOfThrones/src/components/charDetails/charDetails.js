import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from "../../services/gotService";
import Loader from "../loader/loader";
import ErrorMessage from "../errorMessage/errorMessage";

const CharBlock = styled.div`
	background-color: #fff;
	padding: 25px;
	margin-bottom: 40px;
	h4 {
		margin-bottom: 20px;
		text-align: center;
	}
	ul {
		margin-bottom: -10px;
	}
`;

const Preview = styled.div`
	color: black; 
	text-align: center;
	font-size: 26px;
`;

export default class CharDetails extends Component {

	gotService = new gotService();
	
	state = {
		char: null,
		loading: false,
		error: false,
		preview: true,
	}
	componendDidMount() {
		this.updateChar();
	}
	
	componentDidUpdate(prevProps) {
		if(this.props.charId !== prevProps.charId) {
			this.updateChar();
		} 
	}
	
	updateChar = () => {
		const {charId} = this.props;
		
		if(!charId) {
			return;
		}
		
		this.setState({loading: true, preview: false})
		this.gotService.getCharacter(charId)
			.then((char) => {
				this.setState({char, loading: false, error: false})
			})
			.catch(() => {
				this.setState({loading: false, error: true})
			})
	}

	render() {
		
		
		
		const {char, loading, error, preview} = this.state;
		
		const previewMessage = preview && <Preview>Please select a character</Preview>
		const loader = loading && <Loader/>
		const errorMessage = error && <ErrorMessage/>
		const content = !(loading || error || preview) && <View {...char}/>
		
		
		return (
			<CharBlock className="rounded">
				{previewMessage}
				{loader}
				{errorMessage}
				{content}
			</CharBlock>
		);
	}
}

const View = ({name, gender, born, died, culture}) => {
	return (
	<>
		<h4>{name}</h4>
		<ul className="list-group list-group-flush">
			<li className="list-group-item d-flex justify-content-between">
				<strong className="term">Gender</strong>
				<span>{gender}</span>
			</li>
			<li className="list-group-item d-flex justify-content-between">
				<strong className="term">Born</strong>
				<span>{born}</span>
			</li>
			<li className="list-group-item d-flex justify-content-between">
				<strong className="term">Died</strong>
				<span>{died}</span>
			</li>
			<li className="list-group-item d-flex justify-content-between">
				<strong className="term">Culture</strong>
				<span>{culture}</span>
			</li>
		</ul>
	</>
)}