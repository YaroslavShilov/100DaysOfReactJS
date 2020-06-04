import React from 'react';
import './PostList.css';
import PostListItem from "../PostListItem/PostListItem";
import {ListGroup, ListGroupItem} from "reactstrap";

const PostList = ({posts, deleteItem, onToggleLiked, onToggleImportant}) => {
	
	
	
	const elements = posts.map(post => {
		const {id, ...itemProps} = post
		return (
			<ListGroupItem key={id}>
				<PostListItem 
					{...itemProps} 
					deleteItem={() => deleteItem(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)}
				/>
			</ListGroupItem>
		)
		
	}
		
		
	)
	
	return (
		<ListGroup className={'app-list'}>
			{elements}
		</ListGroup>
	);
}

export default PostList