// src/Post.js
import React from 'react';

const Post = ({ title, date, content }) => {
  return (
    <article className="mb-8 p-4 rounded shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <div className="post-content text-gray-800">{content}</div>
    </article>
  );
};

export default Post;
