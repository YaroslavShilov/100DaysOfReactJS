import React, {Component} from 'react';
import styled from 'styled-components';
import Loader from "../loader/loader";
import ErrorMessage from "../errorMessage/errorMessage";
import nextId from "react-id-generator";

const ItemUL = styled.ul`
	background-color: #fff;
`

const ItemLI = styled.li`
	cursor: pointer
`

export default class ItemList extends Component {
	
	state = {
		itemList: null,
		error: false,
		loading: true,
	}
	
	componentDidMount() {
		
		const {getData} = this.props;
		getData()
			.then((itemList) => {
				this.setState({
					itemList,
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
		return arr.map((item) => {
			
			const {id} = item;
			const label = this.props.renderItem(item)
			
			return (
				<ItemLI 
					key={nextId()} 
					className="list-group-item"
					onClick={() => this.props.onCharSelected(id)}
				>
					{label}
				</ItemLI>
			)
		})
	}

	render() {
		
		const {itemList, error, loading} = this.state;
		
		const errorMessage = error && <ErrorMessage/>
		const loader = loading && <Loader/>
		const content = !(errorMessage || loader) && this.renderItems(itemList)
	
		return (
			<ItemUL className="list-group">
				{errorMessage}
				{loader}
				{content}
			</ItemUL>
		);
	}
}