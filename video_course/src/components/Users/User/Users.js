import React, {Component} from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../assets/images/avatar.jpg';


class Users extends Component {
	
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			this.props.setUsers(response.data.items);
		});
	}


	render() {
		return (
			<div className={s.user_wrap}>

				{
					this.props.users.map(i => (
						<section key={i.id} className={s.user}>
							<aside className={s.user_avatar}>
								<img src={
									i.photos.small !== null ? i.photos.small : userPhoto
								} alt="avatar"/>
								<p>
									{i.followed ?
										<button onClick={() => this.props.unfollow(i.id)}>Follow</button> :
										<button onClick={() => this.props.follow(i.id)}>Unfollow</button>
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
	}
}

export default Users;
