import React from 'react';
import styles from './styles.module.css';
import BlogCard from './BlogCard';
import data from './dummyBlogData.json';

function BlogSlice() {
  return (
    <div className={styles.blogSliceContainer}>
      <div className={styles.blogCards}>
        {data?.blog_posts?.map((blog, i) => (
          <BlogCard key={`${blog?.title} ${i}`} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogSlice;
