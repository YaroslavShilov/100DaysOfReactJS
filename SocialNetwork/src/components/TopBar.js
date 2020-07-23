import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import {CurrentUserContext} from "../context/currentUser";

const TopBar = () => {
	
	const [currentUserState] = useContext(CurrentUserContext);
	
	return (
		<nav className={"navbar navbar-light"}>
			<div className={"container"}>
				<Link to={"/"} className={"navbar-brand"}>SocialNetwork</Link>
				
				<ul className={"nav navbar-nav pull-xs-right"}>
					
					<li className={"nav-item"}>
						<NavLink to={"/"} className={"nav-link"} exact>Home</NavLink>
					</li>
					
					{
						currentUserState.isLoggedIn === false && (
							<>
								<li className={"nav-item"}>
									<NavLink to={"/login"} className={"nav-link"}>Sign in</NavLink>
								</li>

								<li className={"nav-item"}>
									<NavLink to={"/register"} className={"nav-link"}>Sign up</NavLink>
								</li>
							</>
						) 
					}
					
					{
						currentUserState.isLoggedIn && (
							<>
								<li className="nav-item">
									<NavLink to={'/articles/new'} className={'nav-link'}>
										<i className={'ion-compose'}/>
										&nbsp; New post
									</NavLink>
								</li>
								
								<li className={'nav-item'}>
									<NavLink to={`/profiles/${currentUserState.currentUser.username}`} className={'nav-link'}>
										<img src={currentUserState.currentUser.image} alt="Avatar" className={'user-pic'}/>
										&nbsp; {currentUserState.currentUser.username}
									</NavLink>
								</li>
							</>
						)
					}
					
					
					
				</ul>
			</div>
		</nav>
	);
}

export default TopBar