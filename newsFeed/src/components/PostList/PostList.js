import React from 'react';
import './PostList.css';
import PostListItem from "../PostListItem/PostListItem";
import {ListGroup, ListGroupItem} from "reactstrap";

const PostList = ({posts, deleteItem}) => {
	
	
	
	const elements = posts.map(post => {
		const {id, ...itemProps} = post
		if(typeof(post) === 'object') {
			return (
				<ListGroupItem key={id}>
					<PostListItem {...itemProps} deleteItem={() => {
						deleteItem(id);
					}}/>
				</ListGroupItem>
			)
		} else {
			return null
		}
		
	}
		
		
	)
	
	return (
		<ListGroup className={'app-list'}>
			{elements}
		</ListGroup>
	);
}

export default PostList