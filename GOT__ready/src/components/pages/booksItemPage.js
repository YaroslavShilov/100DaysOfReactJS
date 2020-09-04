import React, {Component} from 'react';
import gotService from '../../services/gotService';
import {Field} from "../itemDetails/ItemDetails";
import ItemDetails from "../itemDetails";
import BookPage from "./bookPage";

class BooksItemPage extends Component {
	gotService = new gotService();
	
	render() {
		return (
			<div>
				<ItemDetails itemId={this.props.bookId} label={'book'}>
					<Field field={'numberOfPages'} label={'Number of pages'} />
					<Field field={'publisher'} label={'Publisher'} />
					<Field field={'released'} label={'Released'} />
				</ItemDetails>
				<BookPage/>
			</div>
		);
	}
}

export default BooksItemPage