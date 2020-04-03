import React, { Component } from 'react'


const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
			</tr>
		</thead>
	)
};

const TableBody = (props) => {
	const character = props.characterData.map((item) => {
		return (
			<tr>
				<td>{item.name}</td>
				<td>{item.job}</td>
			</tr>
		)
	});
	return (
		<tbody>
		{character}
		</tbody>	
	)
};

class Table extends Component {
	render() {
		const {characterData} = this.props;
		
		return (
			<table>
				<TableHeader/>
				<TableBody characterData={characterData}/>
			</table>
		)
	}
}

export default Table