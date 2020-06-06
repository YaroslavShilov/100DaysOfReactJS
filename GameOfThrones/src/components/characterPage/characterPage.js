import React, {Component} from 'react';
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage/errorMessage";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";

class CharacterPage extends Component {
	
	gotService = new gotService();
	
	state = {
		selectedChar: null,
	}

	onCharSelected = (id) => {
		this.setState({
			selectedChar: id,
			error: false,
		})
	}

	componentDidCatch() {
		console.log('error')
		this.setState({
			error: true
		})
	}
	
	render() {
		
		if(this.state.error) return (
			<div style={{backgroundColor: 'white'}}>
				<ErrorMessage/>
			</div>
		);
		
		const itemList = (
			<ItemList
				onCharSelected={this.onCharSelected}
				getData={this.gotService.getAllCharacters}
				renderItem={(item) => item.name}
			/>
		)
		
		const charDetails = (
			<CharDetails 
				charId={this.state.selectedChar}
			/>
		)
		
		return (
			<RowBlock left={itemList} right={charDetails}/>
		);
	}
}

export default CharacterPage