import React from 'react';
import s from './User.module.css';
const User = (props) => {
	return (
		<div>
			{
				props.users.map(i => (
					<section key={i.id} className={s.user}>
						<aside className={s.user_avatar}>
							<img src={i.avatarUrl} alt="avatar"/>
							<p>
								<button>Follow</button>
							</p>
						</aside>
						
						<div className={s.user_main}>
							<div className={s.user_cont}>
								<h2 className={s.user_name}>{i.fullName}</h2>
								<blockquote className={s.user_quote}>{i.status}</blockquote>
							</div>
							<div className={s.user_cities}>
								<p>{i.city}</p>
								<p>{i.country}</p>
							</div>
						</div>
						
					</section>
				))
			}
		</div>
	)
};

export default User;
