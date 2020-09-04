import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from "../../services/gotService";
import Loader from "../loader/loader";
import ErrorMessage from "../errorMessage/errorMessage";

const RandomBlock = styled.div`
	background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 20px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Term = styled.span`
	font-weight: bold;
`;

export const Field = ({item, field, label}) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<Term>{label}</Term>
			<span>{item[field]}</span>
		</li>
	)
}


export default class RandomItemContainer extends Component {
	
	state = {
		item: {},
		loading: true,
		error: false,
	}
	
	componentDidMount() {
		this.updateItem();
		this.timerId = setInterval(this.updateItem, 6000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	gotService = new gotService();
	
	onItemLoaded = (item) => {
		this.setState({item, loading: false})
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		})
	}

	updateItem = () => {
		const itemId = Math.floor(Math.random()*140 + 25);//25-140
		
		const getItem = (id) => {
			if(this.props.type === 'character') return this.gotService.getCharacter(id)
			else if(this.props.type === 'book') return this.gotService.getBook(id)
			else if(this.props.type === 'house') return this.gotService.getHouse(id)
		}
		
		getItem(itemId)
			.then(this.onItemLoaded)
			.catch(this.onError);
	}
	
	render() {
		
		const {item, loading, error} = this.state;
		
		const loader = loading && <Loader/>;
		const errorMessage = error && <ErrorMessage/>;
		let content = null;
		
		if(!(loader || error)) {
			content = (
				<>
					<h4>Random Character: {item.name}</h4>
					<ul className="list-group list-group-flush">
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, {item});
							})
						}
					</ul>
				</>
			)
		}
		
		return (
			<RandomBlock className="rounded">
				{loader}
				{errorMessage}
				{content}
			</RandomBlock>
		);
	}
}