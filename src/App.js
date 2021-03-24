import React, { useState } from 'react';
import Validation from './Validation/Validation';
import PostList from './Posts/PostList';
import postJson from './Posts/posts.json';
import './App.css';

function App() {
  let displayValidMessage = null;
  let displayPost = null;

  const [post, setPost] = useState({
    postJson,
    showPost: true,
  });
  const [inputData, setInputData] = useState();
  const [textLength, setTextLength] = useState({
    showValidMessage: true,
  });

  const inputChangeHandler = (e) => {
    setInputData(e.currentTarget.value);
    setTextLength(e.currentTarget.value.length);
  };

  // Alternative #1
  // const deletePostHandler = (id) => {
  //   const posts = [...post.postJson];
  //   const postId = posts.findIndex((post) => post.id === id);

  //   postId !== -1 && posts.splice(postId, 1);
  //   setPost(posts);
  // };

  // Alternative #2
  const deletePostHandler = (id) => {
    const posts = [...post.postJson];
    const postId = posts.filter((post) => post.id !== id);
    postId !== -1 && setPost(posts);
  };

  if (textLength.showValidMessage) {
    const output = textLength <= 5 ? 'Text too short' : 'Text too long';
    displayValidMessage = <Validation>{output}</Validation>;
  }

  if (post.showPost) {
    displayPost = (
      <>
        {post.postJson.map((post) => {
          const { id, title, body } = post;
          return <PostList key={id} title={title} body={body} deletePost={deletePostHandler.bind(this, id)} />;
        })}
      </>
    );
  }

  return (
    <div className='App'>
      <input type='text' onChange={inputChangeHandler} placeholder='Type something...' />

      {displayValidMessage}
      {displayPost}
    </div>
  );
}

export default App;
