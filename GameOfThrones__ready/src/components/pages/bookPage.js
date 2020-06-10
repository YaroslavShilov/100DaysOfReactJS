import React, {Component} from 'react';
import ErrorMessage from "../errorMessage/errorMessage";
import gotService from "../../services/gotService";
import BooksList from "../booksList";
import {withRouter} from 'react-router-dom';

class BookPage extends Component {
	gotService = new gotService();

	state = {
		error: false,
	}


	componentDidCatch() {
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
			<BooksList
				onItemSelected={(itemId) => {
					this.props.history.push(`${itemId}`)
				}}
				getData={this.gotService.getAllBooks}
				renderItem={(item) => item.name}
			/>
		);
	}
}

export default withRouter(BookPage)