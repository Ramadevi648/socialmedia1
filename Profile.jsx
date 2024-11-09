import React from "react";
import Post from "./Post";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h1>{user.username}</h1>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
      <div className="posts">
        {user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
