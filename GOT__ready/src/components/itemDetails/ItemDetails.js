import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from "../../services/gotService";
import Loader from "../loader/loader";
import ErrorMessage from "../errorMessage/errorMessage";

const ItemBlock = styled.div`
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

export const Field = ({item, field, label}) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<strong className="term">{label}</strong>
			<span>{item[field]}</span>
		</li>
	)
}

export default class ItemDetails extends Component {

	gotService = new gotService();
	
	state = {
		item: null,
		loading: false,
		error: false,
		preview: true,
	}
	componentDidMount() {
		this.updateItem();
	}
	
	componentDidUpdate(prevProps) {
		if(this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		} 
	}
	
	updateItem = () => {
		const {itemId} = this.props;
		
		if(!itemId) {
			return;
		}
		
		this.setState({loading: true, preview: false})
		
		const getItem = (id) => {
			if(this.props.label === 'character') return this.gotService.getCharacter(id)
			else if(this.props.label === 'book') return this.gotService.getBook(id)
			else if(this.props.label === 'house') return this.gotService.getHouse(id)
		}

		getItem(itemId)
			.then((item) => {
				this.setState({item, loading: false, error: false})
			})
			.catch(() => {
				this.setState({loading: false, error: true})
			})
	}

	render() {
		
		const {item, loading, error, preview} = this.state;
		
		const previewMessage = preview && <Preview>Please select a {this.props.label}</Preview>
		const loader = loading && <Loader/>
		const errorMessage = error && <ErrorMessage/>
		let content = null
		
		if(!(loading || error || preview)) {
			content = (
				<>
					<h4>{item.name}</h4>
					<ul className="list-group list-group-flush">
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, {item})
							})
						}
					</ul>
				</>
			)
		}
		
		
		return (
			<ItemBlock className="rounded">
				{previewMessage}
				{loader}
				{errorMessage}
				{content}
			</ItemBlock>
		);
	}
}