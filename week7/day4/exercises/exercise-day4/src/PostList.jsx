import React from 'react';
import posts from './posts.json';

function PostList() {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id} style={{border: '1px solid #ccc', margin: '1em 0', padding: '1em'}}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
