import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import SearchBar from '../SearchBar';

const EarnSlice = () => {
  return (
    <div className={styles.earnSlice}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Get paid for the services you hire...
          </h1>
          <h2 className={styles.heading}>Yes, you read that right!</h2>
          <p className={styles.description}>
            Discover the power of TaskBucks, where you get more that just a good
            job done. Earn TaskBucks with every purchase and unlock a world of
            vouchers and exciting gifts.
          </p>
          <p className={styles.description}>
            Transform your tasks into tresures. Join TaskBucks today!
          </p>
          <button className={styles.button}>Start Earning TaskBucks</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/dummyproduct.png"
          alt="Dummy Product"
          className={styles.image}
          width="500"
          height="300"
        />
      </div>
    </div>
  );
};

export default EarnSlice;
