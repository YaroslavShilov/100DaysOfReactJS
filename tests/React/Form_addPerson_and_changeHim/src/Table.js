import React from 'react'


const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
				<th>Remove</th>
			</tr>
		</thead>
	)
};

const TableBody = props => {
	const character = props.characterData.map((item,index) => {
		return (
			<tr key={index}>
				<td>{item.name}</td>
				<td>{item.job}</td>
				<td>
					<button onClick={() => props.removeCharacter(index)}>Delete</button>
				</td>
			</tr>
		)
	});
	return <tbody>{character}</tbody>;
};

const Table = props => {
	const { characterData, removeCharacter } = props;

	return (
		<table>
			<TableHeader/>
			<TableBody characterData={characterData} removeCharacter={removeCharacter}/>
		</table>
	)
};

export default Table