import React, {useContext} from 'react';
import {Search} from "../components/Search/Search";
import {Card} from "../components/Card/Card";
import {GithubContext} from "../context/github/githubContext";

export const Home = (props) => {
	
	const {loading, users} = useContext(GithubContext)
	
	return (
		<>
			<Search/>
			
			<div className="row">
				{
					
					loading
						? <p className={'text-center col-sm-12'}>Loading...</p>
						: users.map(user => (
								<div className="col-sm-4 mb-4" key={user.id}>
									<Card user={user}/>
								</div>
						))
				}
				
				
			</div>
		</>
	);
}
