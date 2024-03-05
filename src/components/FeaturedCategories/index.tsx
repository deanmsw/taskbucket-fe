import React from 'react';
import styles from './styles.module.css';
import data from './data.json';

function FeaturedCategories() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Categories</h1>
      <div className={styles.grid}>
        {data?.categories?.map((cat, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.header}>
              <h2>{cat?.title}</h2>
            </div>
            <div className={styles.body}>
              <p>{cat?.description}</p>
            </div>
            <div className={styles.footer}>
              <a href={`category/${cat?.slug}`}>
                <button>View here</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;
