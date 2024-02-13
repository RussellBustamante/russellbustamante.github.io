// src/PostsPage.js
import React from 'react';
import Post from './Post';
import Category from './Category';

const postsData = [
    {
        id: 0,
        title: 'Exploring the Outdoors',
        date: 'March 10, 2024',
        content: 'Content about outdoor activities...',
        category: 'Lifestyle'
    },
    {
        id: 1,
        title: 'New Advances in AI',
        date: 'March 15, 2024',
        content: 'Content about the latest in AI technology...',
        category: 'Technology'
    },
    {
        id: 2,
        title: 'New Advances in ML',
        date: 'March 15, 2024',
        content: 'Content about the latest in AI technology...',
        category: 'Lifestyle'
    },

];

const PostsPage = () => {
    // Group posts by category
    const categories = postsData.reduce((acc, post) => {
      acc[post.category] = [...(acc[post.category] || []), post];
      return acc;
    }, {});
  
    return (
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-10">Blog Posts</h1>
        {Object.keys(categories).map(categoryName => (
          <Category key={categoryName} name={categoryName} posts={categories[categoryName]} />
        ))}
      </div>
    );
  };
  
export default PostsPage;
