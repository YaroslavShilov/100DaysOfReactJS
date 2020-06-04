import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from "../../services/gotService";
import Loader from "../loader/loader";
import ErrorMessage from "../errorMessage/errorMessage";

const RandomBlock = styled.div`
	background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Term = styled.span`
	font-weight: bold;
`;

const View = ({char}) => {
	const {name, gender, born, died, culture} = char
	return (
		<>
			<h4>Random Character: {name}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<Term>Gender </Term>
					<span>{gender}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<Term>Born </Term>
					<span>{born}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<Term>Died </Term>
					<span>{died}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<Term>Culture </Term>
					<span>{culture}</span>
				</li>
			</ul>
		</>
	)
}


export default class RandomChar extends Component {
	constructor() {
		super();
		this.updateChar();
	}
	
	state = {
		char: {},
		loading: true,
		error: false,
	}

	gotService = new gotService();
	
	onCharLoaded = (char) => {
		this.setState({char, loading: false})
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		})
	}

	updateChar() {
		const id = Math.floor(Math.random()*140 + 25);//25-140
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}
	
	render() {
		
		const {char, loading, error} = this.state;
		
		const loader = loading && <Loader/>;
		const errorMessage = error && <ErrorMessage/>;
		const content = !(loader || error) && <View char={char}/>;
		
		return (
			<RandomBlock className="rounded">
				{loader}
				{errorMessage}
				{content}
			</RandomBlock>
		);
	}
}