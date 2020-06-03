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
		term: '',
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
	
	const changeProper = (id, property) => {
		setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, [property]: !old[property]}

			const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]

			return {...state, data: newArr}

		})
	}

	const onToggleImportant = (id) => {
		changeProper(id, 'important')
	}
	
	const onToggleLiked = (id) => {
		changeProper(id, 'like')
	}
	
	const searchPost = (items, term) => {
		if(term.length === 0) {
			return items;
		}
		
		items.filter((post) => {
			return post.label.indexOf(term) > -1
		})
	}

	const liked = state.data.filter(post => post.like).length
	const allPosts = state.data.filter(post => typeof(post) === "object").length;
	
	
	return (
		<div className={'app'}>
			<Header
				liked={liked}
				allPosts={allPosts}
			/>
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