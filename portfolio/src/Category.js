// src/Category.js
import React from 'react';
import Post from './Post';

const Category = ({ name, posts }) => {
  return (
    <section className="mb-10">
      <h3 className="text-3xl font-bold mb-4">{name}</h3>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
};

export default Category;
