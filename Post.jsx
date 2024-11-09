import React, { useState } from "react";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleShare = () => {
    alert("Post shared!");
  };

  return (
    <div className="post">
      <img src={post.imageUrl} alt="Post" className="post-image" />
      <div className="post-actions">
        <button onClick={handleLike}><i class="fa-regular fa-heart"></i>
        Like ({likes})</button>
        <button onClick={handleShare}>Share</button>
      </div>
      <form onSubmit={handleComment}>
        <input
          type="text"
          value={newComment}
          placeholder="Add a comment"
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
      <div className="comments">
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
