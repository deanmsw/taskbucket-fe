import React from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';

function CategoryCard(props: { key: any; category: any }) {
  const { key, category } = props;
  const { title, description, slug } = category;
  return (
    <div key={key} className={styles.card}>
      <Image
        src="/dummyproduct.png"
        alt="Caffe Latte"
        width="200"
        height="200"
      />

      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.body}>
        <p>{description}</p>
      </div>
      <div className={styles.footer}>
        <a href={`categories/${slug}`}>
          <button>View here</button>
        </a>
      </div>
    </div>
  );
}

export default CategoryCard;
