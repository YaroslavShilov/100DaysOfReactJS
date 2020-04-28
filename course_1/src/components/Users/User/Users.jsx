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
				props.users.map(i => (
					<section key={i.id} className={s.user}>
						<aside className={s.user_avatar}>
							<NavLink to={'/profile/' + i.id}>
								<img src={
									i.photos.small !== null ? i.photos.small : userPhoto
								} alt="avatar"/>
							</NavLink>
							<p>
								{i.followed ?
									<button onClick={() => {

										axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`, {
											withCredentials: true,
											headers: {
												"API-KEY": "245f4fb1-f95a-47ec-b534-edb4329d7ea7"
											},
										}).then(response =>
										{
											if(response.data.resultCode === 0) {
												props.unfollow(i.id);
											}

										}).catch((err)=>console.log(err));
									}}>Unfollow</button> :
									<button onClick={() => {

										props.toggleFollowingInProgress(true);
										axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`, {}, {
											withCredentials: true,
											headers: {
												"API-KEY": "245f4fb1-f95a-47ec-b534-edb4329d7ea7"
											},
										}).then(response => 
										{
											console.log(response);
											if(response.data.resultCode === 0) {
												props.follow(i.id);
											}
											props.toggleFollowingInProgress(false);
												
										}).catch((err)=>console.log(err));
										
									
									}}>follow</button>
								}

							</p>
						</aside>

						<div className={s.user_main}>
							<div className={s.user_cont}>
								<h2 className={s.user_name}>{i.name}</h2>
								<blockquote className={s.user_quote}>{i.status}</blockquote>
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