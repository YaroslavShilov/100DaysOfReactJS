import React, {useState} from 'react';
import './App.css'
import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";

const App = (props) => {
	const data = [
		{id: 1, label: 'Going to learn React', important: true},
		{id: 2, label: 'That is so good', important: false},
		{id: 3, label: 'I need a break...', important: false},
		1,
		'test',
	]
	
	const [state, setState] = useState({
		data,
	})


	const deleteItem = (id) => {
		setState({
			...state,
			data: state.data.filter(post => post.id !== id),
		})
	};
	
	const addItem = (body) => {
		const newItem = {
			label: body,
			important: false,
			id: (+new Date()).toString(16),
		}
		setState({
			...state,
			data: [...state.data, newItem]
		})
	}

	return (
		<div className={'app'}>
			<Header/>
			<div className={'search-panel d-flex'}>
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList posts={state.data} deleteItem={deleteItem}/>
			<PostAddForm
				onAdd={addItem}
			/>
		</div>
	);
}

export default App