import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message="Hello" like="1"/>
        <Post message="my" like="2"/>
        <Post message="friend" like="4"/>
        <Post message="how" like="5"/>
        <Post message="are" like="7"/>
        <Post message="you?" like="8"/>
      </div>
    </div>
  )

}

export default MyPosts;