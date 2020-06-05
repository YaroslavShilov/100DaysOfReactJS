import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from "../../services/gotService";
import Loader from "../loader/loader";
import ErrorMessage from "../errorMessage/errorMessage";

const ItemUL = styled.ul`
	background-color: #fff;
`

const ItemLI = styled.li`
	cursor: pointer
`

export default class ItemList extends Component {
	
	gotService = new gotService();
	
	state = {
		charList: null,
		error: false,
		loading: true,
	}
	
	componentDidMount() {
		this.gotService.getAllCharacters()
			.then((charList) => {
				this.setState({
					charList,
					loading: false,
					error: false
				})
			})
			.catch(() => {
				this.setState({
					error: true,
					loading: false,
				})
			})
	}
	
	renderItems = (arr) => {
		return arr.map((item, inx) => {
			return (
				<ItemLI 
					key={item.id} 
					className="list-group-item"
					onClick={() => this.props.onCharSelected(item.id)}
				>
					{item.name}
				</ItemLI>
			)
		})
	}

	render() {
		
		const {charList, error, loading} = this.state;
		
		const errorMessage = error && <ErrorMessage/>
		const loader = loading && <Loader/>
		const content = !(errorMessage || loader) && this.renderItems(charList)
	
		return (
			<ItemUL className="list-group">
				{errorMessage}
				{loader}
				{content}
			</ItemUL>
		);
	}
}