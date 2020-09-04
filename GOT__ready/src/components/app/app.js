import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomItem from '../randomItem';
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../pages/characterPage";
import gotService from "../../services/gotService";
import BookPage from "../pages/bookPage";
import HousePage from "../pages/housePage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BooksItemPage from "../pages/booksItemPage";
import styled from 'styled-components';
import Bg from './got.jpeg';
import HomePage from "../pages/homePage";
import Error404 from "../errors/err404";

const AppBlock = styled.div`
	overflow-x: hidden;
	background: url(${Bg}) top center no-repeat;
	background-size: cover;
	font-size: 16px;
	min-height: 100vh;
	padding-bottom: 40px;
	
	a {
		color: inherit;
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
		color: inherit;
	}
	a:hover {
		text-decoration: none;
		color: inherit;
	}
	a:focus {
		text-decoration: none;
		color: inherit;
	}
	a:active {
		text-decoration: none;
		color: inherit;
	}
`;

class App extends React.Component {

	state = {
		randomBlock: true,
		error: false,
	}

	componentDidCatch() {
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

		if (this.state.error) return (
			<div style={{backgroundColor: 'white'}}>
				<ErrorMessage/>
			</div>
		)


		return (
			<Router>
				<AppBlock>
					<Container>
						<Header/>
					</Container>
					<Container>
						<Row>
							<Col lg={{size: 5, offset: 0}} className={'mb-4'}>
								{this.state.randomBlock && <RandomItem/>}
								<Button color={'info'} onClick={this.toggleRandom}>Toggle Random</Button>
							</Col>
						</Row>

						<Switch>
							<Route path={'/characters'} component={CharacterPage}/>
							<Route path={'/houses'} component={HousePage}/>
							<Route path={'/books'} exact component={BookPage}/>
							<Route path={'/books/:id'} render={
								({match}) => {
									const {id} = match.params;
									return <BooksItemPage bookId={id}/>
								}
							}/>
							<Route path={'/'} component={HomePage} exact/>
							<Route component={Error404}/>
						</Switch>

					</Container>
				</AppBlock>
			</Router>
		);
	}
}

export default App;