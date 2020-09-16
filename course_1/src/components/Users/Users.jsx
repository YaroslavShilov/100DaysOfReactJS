import React from 'react';
import s from './User/User.module.css';
import {User} from "./User/User";
import {Paginator} from "../common/Paginator/Paginator";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unFollow}) => {


	return (
		<div className={s.user_wrap}>
			<Paginator
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
			/>

			{users.map(user =>
				<User
					key={user.id}
					id={user.id}
					name={user.name}
					status={user.status}
					photos={user.photos}
					followingInProgress={followingInProgress}
					follow={follow}
					unFollow={unFollow}
					followed={user.followed}
				/>
			)}

			<Paginator
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
			/>
		</div>
	)
};

export default Users;

