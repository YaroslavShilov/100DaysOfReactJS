import React from 'react';
import './Profile.css';

const Profile = () => {
    return <div className='content'>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="img"/>
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className="posts">
        <div className="item">
          post 1
        </div>
        <div className="item">
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;