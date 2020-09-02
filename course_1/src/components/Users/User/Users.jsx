import React from 'react';
import userPhoto from '../../../assets/images/avatar.jpg';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for(let i=1; i<=pagesCount; i++) {
		pages.push(i);
	}
	
	
	
	
	return (
		<div className={s.user_wrap}>
			<ul className={s.user_pagination}>
				{pages.map(i =>
					<li key={i}
						className={props.currentPage === i ? s.active : ''}
						onClick={()=> props.onPageChanged(i) }
					>{i}</li>
				)}
			</ul>

			{
				props.users.map(user => (
					<section key={user.id} className={s.user}>
						<aside className={s.user_avatar}>
							<NavLink to={'/profile/' + user.id}>
								<img src={
									user.photos.small !== null ? user.photos.small : userPhoto
								} alt="avatar"/>
							</NavLink>
							<p>
								{user.followed ?
									
									<button
										disabled={props.followingInProgress.some(id=> id===user.id)}
										onClick={() => props.unFollow(user.id)}
									>Unfollow</button> :
									
									<button
										disabled={props.followingInProgress.some(id=> id===user.id)}
										onClick={() => props.follow(user.id)}
									>Follow</button>
									
								}

							</p>
						</aside>

						<div className={s.user_main}>
							<div className={s.user_cont}>
								<h2 className={s.user_name}>{user.name}</h2>
								<blockquote className={s.user_quote}>{user.status}</blockquote>
							</div>
							{/*<div className={s.user_cities}>*/}
							{/*	<p>{user.location.city}</p>*/}
							{/*	<p>{user.location.country}</p>*/}
							{/*</div>*/}
						</div>

					</section>
				))
			}
		</div>
	)
};

export default Users;

