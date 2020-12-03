import React from "react";
import s from "./Post.module.css";

type PropsType = {
  message: string;
  like: number;
};

const Post: React.FC<PropsType> = ({ message, like }) => {
  return (
    <div className={s.item}>
      <img
        src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        alt="avatar"
      />
      {message}
      <div>
        <span>like: {like}</span>
      </div>
    </div>
  );
};

export default Post;
