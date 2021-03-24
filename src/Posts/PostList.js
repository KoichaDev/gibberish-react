import React from 'react';
import './postList.css';

const PostList = ({ postId, title, body, deletePost }) => {
  return (
    <section className='list' onClick={deletePost}>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
};

export default PostList;
