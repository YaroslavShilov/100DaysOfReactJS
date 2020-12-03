import React from "react";
import s from "./User/User.module.css";
import { User } from "./User/User";
import { UserType } from "../../types/types";

type PropsType = {
  users: Array<UserType>;
  followingInProgress: Array<number>;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
};

const Users: React.FC<PropsType> = ({
  users,
  followingInProgress,
  follow,
  unFollow,
}) => {
  return (
    <div className={s.user_wrap}>
      {users.map((user) => (
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
      ))}
    </div>
  );
};

export default Users;
