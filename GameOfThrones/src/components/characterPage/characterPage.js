import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage/errorMessage";

class CharacterPage extends Component {
	
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
		
		return (
			<Row>
				<Col md='6'>
					<ItemList onCharSelected={this.onCharSelected}/>
				</Col>
				<Col md='6'>
					<CharDetails charId={this.state.selectedChar}/>
				</Col>
			</Row>
		);
	}
}

export default CharacterPage