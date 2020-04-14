import React from 'react';

function Lists_and_keys() {
	
	//BEGIN Number list
	function ListItem(props) {
		return <li>{props.value}</li>
	}

	function NumberList(props) {
		const numbers = props.numbers;
		return (
			<ul>
				{
					numbers.map(item => <ListItem key={item.toString()} value={item}/>)
				}
			</ul>
		)
		
	}
	const numbers = [1,2,3,4,5];
	//END Number list
	
	//BEGIN Blog
	function Blog(props) {
		/** @namespace props.postsData */
		const postsData = props.postsData;
		
		const sidebar = (
			<ul>
				{postsData.map(post => 
					<li key={post.id}>
						{post.title}
					</li>
				)}
			</ul>
		);
		
		function Post(props) {
			return (
				<div id={props.id}>
					<h3>{props.title}</h3>
					<p>{props.title}</p>
				</div>
			)
		}

		
		const content = postsData.map(post => <Post key={post.id} id={post.id} title={post.title}/>);

		return (
			<div>
				{sidebar}
				<hr />
				{content}
			</div>
		)
	}
	
	const posts = [
		{id: 1, title: 'Hello world', content: 'Welcome!'},
		{id: 2, title: 'Installing', content: 'You can install React using npm.'}
	];
	//END Blog
	
	
	
	return (
		<div>
			<NumberList numbers={numbers} />
			<Blog postsData={posts} />
		</div>
	);
}

export default Lists_and_keys;