import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomItem from '../randomItem';
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../pages/characterPage";
import gotService from "../../services/gotService";
import BookPage from "../pages/bookPage";
import HousePage from "../pages/housePage";


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
							{this.state.randomBlock && <RandomItem/>}
						</Col>
					</Row>
					
					<CharacterPage/>
					<BookPage/>
					<HousePage/>
					
				</Container>
			</>
		);
	}
}

export default App;