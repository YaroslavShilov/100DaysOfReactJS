import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../characterPage/characterPage";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import gotService from "../../services/gotService";


class App extends React.Component {
	
	state = {
		randomBlock: true,
		error: false,
	}
	
	componentDidCatch() {
		console.log('error')
		this.setState({
			error: true
		})
	}
	
	toggleRandom = () => {
		this.setState({
			randomBlock: !this.state.randomBlock,
		})
	}

	gotService = new gotService();
	
	render() {
		
		if(this.state.error) return (
			<div style={{backgroundColor: 'white'}}>
				<ErrorMessage/>
			</div>
		)
		
		return (
			<>
				<Container>
					<Header/>
				</Container>
				<Container>
					<Row>
						<Col lg={{size: 5, offset: 0}} className={'mb-4'}>
							<Button color={'info'} onClick={this.toggleRandom}>Toggle Random</Button>
						</Col>
					</Row>
					<Row>
						<Col lg={{size: 5, offset: 0}}>
							{this.state.randomBlock && <RandomChar/>}
						</Col>
					</Row>
					
					<CharacterPage/>
					
					<Row>
						<Col md='6'>
							<ItemList
								onCharSelected={this.onCharSelected}
								getData={this.gotService.getAllBooks}
								renderItem={({name}) => name}
							/>
						</Col>
						<Col md='6'>
							<CharDetails charId={this.state.selectedChar}/>
						</Col>
					</Row>
					
					<Row>
						<Col md='6'>
							<ItemList 
								onCharSelected={this.onCharSelected}
								getData={this.gotService.getAllHouses}
								renderItem={({name}) => name}
							/>
						</Col>
						<Col md='6'>
							<CharDetails charId={this.state.selectedChar}/>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default App;