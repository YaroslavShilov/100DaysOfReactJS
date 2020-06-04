import React, {Component} from 'react';
import styled from 'styled-components';

const ItemLI = styled.li`
	cursor: pointer
`

export default class ItemList extends Component {

	render() {
		return (
			<ul className="item-list list-group">
				<ItemLI className="list-group-item">
					John Snow
				</ItemLI>
				<ItemLI className="list-group-item">
					Brandon Stark
				</ItemLI>
				<ItemLI className="list-group-item">
					Geremy
				</ItemLI>
			</ul>
		);
	}
}