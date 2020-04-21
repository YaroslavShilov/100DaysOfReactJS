import React from 'react';
import userPhoto from '../../../assets/images/avatar.jpg';
import s from './Users.module.css';

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
					<li
						className={props.currentPage === i  && s.active}
						onClick={()=> props.onPageChanged(i) }
					>{i}</li>
				)}
			</ul>

			{
				props.users.map(i => (
					<section key={i.id} className={s.user}>
						<aside className={s.user_avatar}>
							<img src={
								i.photos.small !== null ? i.photos.small : userPhoto
							} alt="avatar"/>
							<p>
								{i.followed ?
									<button onClick={() => props.unfollow(i.id)}>Follow</button> :
									<button onClick={() => props.follow(i.id)}>Unfollow</button>
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