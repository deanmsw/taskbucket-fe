import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import SearchBar from '../SearchBar';

const WorkSlice = () => {
  return (
    <div className={styles.workSlice}>
      <div className={styles.imageContainer}>
        <Image
          src="/dummyproduct.png"
          alt="Dummy Product"
          className={styles.image}
          width="500"
          height="300"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            We make sure our Taskers are looked after!
          </h1>
          {/* <p className={styles.description}>
            Discover the power of TaskBucks, where you get more that just a good
            job done. Earn TaskBucks with every purchase and unlock a world of
            vouchers and exciting gifts.
          </p>
          <p className={styles.description}>
            Transform your tasks into tresures. Join TaskBucks today!
          </p> */}
          <button className={styles.button}>Become a Freelancer</button>
        </div>
      </div>
    </div>
  );
};

export default WorkSlice;
