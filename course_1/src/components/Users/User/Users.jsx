import React from 'react';
import userPhoto from '../../../assets/images/avatar.jpg';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

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
									
									<button disabled={props.followingInProgress.some(id=> id===user.id)} onClick={() => {
										
										props.toggleFollowingInProgress(true, user.id);
										
										axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
											withCredentials: true,
											headers: {
												"API-KEY": "245f4fb1-f95a-47ec-b534-edb4329d7ea7"
											},
										}).then(response => {
											if(response.data.resultCode === 0) {
												props.unfollow(user.id);
											}

											props.toggleFollowingInProgress(false, user.id);

										}).catch((err)=>console.log(err));
									}}>Unfollow</button> :
									
									<button disabled={props.followingInProgress.some(id=> id===user.id)} 
										onClick={() => {
											props.toggleFollowingInProgress(true, user.id);
											
											axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
												withCredentials: true,
												headers: {
													"API-KEY": "245f4fb1-f95a-47ec-b534-edb4329d7ea7"
												},
											}).then(response => {
												console.log(response);
												if(response.data.resultCode === 0) {
													props.follow(user.id);
												}
												props.toggleFollowingInProgress(false, user.id);
													
											}).catch((err)=>console.log(err));
										
										}}
									>follow</button>
									
								}

							</p>
						</aside>

						<div className={s.user_main}>
							<div className={s.user_cont}>
								<h2 className={s.user_name}>{user.name}</h2>
								<blockquote className={s.user_quote}>{user.status}</blockquote>
							</div>
							<div className={s.user_cities}>
								<p>{"i.location.city"}</p>
								<p>{"i.location.country"}</p>
							</div>
						</div>

					</section>
				))
			}
		</div>
	)
};

export default Users;