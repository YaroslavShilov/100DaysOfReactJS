import React, {Component} from 'react';
import ItemList from "../itemList";
import ItemDetails from "../itemDetails";
import ErrorMessage from "../errorMessage/errorMessage";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";

class PageContainer extends Component {

	gotService = new gotService();

	state = {
		selectedItem: null,
	}

	onItemSelected = (id) => {
		this.setState({
			selectedItem: id,
			error: false,
		})
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}
	
	getData = () => {
		if(this.props.type === 'character') return this.gotService.getAllCharacters
		else if(this.props.type === 'book') return this.gotService.getAllBooks
		else if(this.props.type === 'house') return this.gotService.getAllHouses
	}

	render() {

		if(this.state.error) return (
			<div style={{backgroundColor: 'white'}}>
				<ErrorMessage/>
			</div>
		);
		

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.getData()}
				renderItem={(item) => item.name}
			/>
		)

		
		const charDetails = (
			<ItemDetails itemId={this.state.selectedItem} label={this.props.type}>
				{this.props.children}
			</ItemDetails>
		)

		return (
			<RowBlock left={itemList} right={charDetails}/>
		);
	}
}

export default PageContainer