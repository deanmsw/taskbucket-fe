import React from 'react';
import styles from './styles.module.css';
import BlogCard from './BlogCard';
import data from './dummyBlogData.json';

function BlogSlice({ title }) {
  return (
    <div className={styles.blogSliceContainer}>
      <div>{title}</div>
      <div className={styles.blogCards}>
        {data?.blog_posts?.map((blog, i) => (
          <BlogCard key={`${blog?.title} ${i}`} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogSlice;
