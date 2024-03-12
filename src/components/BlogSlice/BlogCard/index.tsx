/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.css';

function BlogCard(props: { key: any; blog: any }) {
  const { key, blog } = props;
  const { title, description, slug } = blog || {};
  return (
    <div key={key} className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src="/dummyproduct.png"
          alt="Caffe Latte"
          width="100%"
          height="100%"
        />
      </div>

      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.body}>
        <p>{description}</p>
      </div>
      <div className={styles.footer}>
        <a href={`blog/${slug}`} className={styles.callToActionLink}>
          <p className={styles.callToAction}>View here</p>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
