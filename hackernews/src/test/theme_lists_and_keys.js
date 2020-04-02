import React from 'react';

function Theme_lists_and_keys() {
	
	//BEGIN Number list
	function ListItem(props) {
		return <li>{props.value}</li>
	}

	function NumberList(props) {
		
		const numbers = props.numbers;
		const list = numbers.map((item) => {
			return (
				<ListItem key={item.toString()} value={item} />
			)
		});
		return <ul>{list}</ul>
	}
	const numbers = [1,2,3,4,5];
	//END Number list
	
	//BEGIN Blog
	function Blog(props) {
		const posts = props.posts;

		const sidebar = (
			<ul>
				{posts.map((post) => {
					return (
						<li key={post.id}>
							{post.title}
						</li>
					)
				})}
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

		const content = posts.map((post)=>{
			return (
				<Post key={post.id} id={post.id} title={post.title}/>
			);
		});

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
			<Blog posts={posts} />
		</div>
	);
}

export default Theme_lists_and_keys;