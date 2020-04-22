import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
	onAddItem = () => {
		this.props.onItemAdded('Work')
	};
	render() {
		return (
			<div className={"item-add-form"}>
				<button className="btn btn-outline-secondary" onClick={this.onAddItem}>Add Item</button>
			</div>
		);
	}
}