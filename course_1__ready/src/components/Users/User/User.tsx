import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/avatar.jpg";
import { PhotosType } from "../../../types/types";

type PropsType = {
  id: number;
  photos: PhotosType;
  name: string;
  status: string;
  followingInProgress: Array<number>;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  followed: boolean;
};

export const User: React.FC<PropsType> = ({
  id,
  photos,
  name,
  status,
  followingInProgress,
  follow,
  unFollow,
  followed,
}) => {
  const isDisabled: boolean = followingInProgress.some(
    (userId) => userId === id
  );

  return (
    <div className={s.user}>
      <div className={s.user_avatar}>
        <NavLink to={"/profile/" + id}>
          <img src={photos.small || userPhoto} alt="avatar" />
        </NavLink>

        <p>
          {followed ? (
            <button disabled={isDisabled} onClick={() => unFollow(id)}>
              Unfollow
            </button>
          ) : (
            <button disabled={isDisabled} onClick={() => follow(id)}>
              Follow
            </button>
          )}
        </p>
      </div>

      <div className={s.user_main}>
        <div className={s.user_cont}>
          <h2 className={s.user_name}>{name}</h2>
          <blockquote className={s.user_quote}>{status}</blockquote>
        </div>
      </div>
    </div>
  );
};
