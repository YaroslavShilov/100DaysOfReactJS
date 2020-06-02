import React, {useState} from 'react';
import './App.css'
import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";

const App = (props) => {
	const data = [
		{id: 1, label: 'Going to learn React', important: true, like: false},
		{id: 2, label: 'That is so good', important: false, like: false},
		{id: 3, label: 'I need a break...', important: false, like: false},
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

	const onToggleImportant = (id) => {
		
	}
	
	const onToggleLiked = (id) => {
		const changePost = {...state.data.find(post => post.id === id)};
		changePost.like = !changePost.like;
		const changeData = state.data.filter(post => post.id !== id);
		
		setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			
			const old = data[index];
			const newItem = {...old, like: !old.like}
			
		})
	}

	return (
		<div className={'app'}>
			<Header/>
			<div className={'search-panel d-flex'}>
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList 
				posts={state.data} 
				deleteItem={deleteItem}
				onToggleImportant={onToggleImportant}
				onToggleLiked={onToggleLiked}
			/>
			<PostAddForm
				onAdd={addItem}
			/>
		</div>
	);
}

export default App