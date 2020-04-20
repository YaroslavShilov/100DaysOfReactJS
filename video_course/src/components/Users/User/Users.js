import React from 'react';
import s from './Users.module.css';
const Users = (props) => {
	if (props.users.length === 0 ) {
		props.setUsers([
			{
				id: 1,
				avatarUrl: 'https://i04.fotocdn.net/s111/7342fc5d7c181512/public_pin_l/2494157237.jpg',
				followed: true,
				fullName: 'Dmitry',
				status: 'I\'m a boss',
				location: {city: 'Minsk', country: 'Belarus'}
			},
			{
				id: 2,
				avatarUrl: 'https://pixelbox.ru/wp-content/uploads/2018/02/spiderman_steam_avatar.jpg',
				followed: false,
				fullName: 'Alesha',
				status: 'I\'m a boss too',
				location: {city: 'Minsk', country: 'Belarus'}
			},
			{
				id: 3,
				avatarUrl: 'https://i05.fotocdn.net/s111/3aebb082a7882d95/public_pin_m/2494157242.jpg',
				followed: true,
				fullName: 'Petr',
				status: 'Big man',
				location: {city: 'Piter', country: 'Russia'}
			},
			{
				id: 4,
				avatarUrl: 'https://i04.fotocdn.net/s111/e2cc2797814f9d18/public_pin_l/2494157238.jpg',
				followed: true,
				fullName: 'Boris',
				status: 'hren',
				location: {city: 'Moscow', country: 'Russia'}
			},
			{
				id: 5,
				avatarUrl: 'https://i05.fotocdn.net/s111/54e931d082fa9d0f/public_pin_l/2494157248.jpg',
				followed: false,
				fullName: 'Britva',
				status: 'popadesh',
				location: {city: 'Moscow', country: 'Russia'}
			},
		]); 
	}
	

	return (
		<div className={s.user_wrap}>
			{
				props.users.map(i => (
					<section key={i.id} className={s.user}>
						<aside className={s.user_avatar}>
							<img src={i.avatarUrl} alt="avatar"/>
							<p>
								{i.followed ?
									<button onClick={() => props.unfollow(i.id)}>Follow</button> :
									<button onClick={() => props.follow(i.id)}>Unfollow</button>
								}

							</p>
						</aside>

						<div className={s.user_main}>
							<div className={s.user_cont}>
								<h2 className={s.user_name}>{i.fullName}</h2>
								<blockquote className={s.user_quote}>{i.status}</blockquote>
							</div>
							<div className={s.user_cities}>
								<p>{i.location.city}</p>
								<p>{i.location.country}</p>
							</div>
						</div>

					</section>
				))
			}
		</div>
	)
};

export default Users;
