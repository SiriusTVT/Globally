import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <h1>Publicaciones</h1>
      {posts.map(post => (
        <div key={post._id} className="post">
          <h2>{post.title}</h2>
          <h3>{post.subtitle}</h3>
          <p>{post.content}</p>
          <p>{post.language} - {post.level}</p>
          {post.imagePath && <img src={`http://localhost:5000/${post.imagePath}`} alt={post.title} className="post-image" />}
        </div>
      ))}
    </div>
  );
};

export default Posts;