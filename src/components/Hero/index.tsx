import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import SearchBar from '../SearchBar';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>Get Help. Get Paid. Why Not?</h1>
          <p className={styles.description}>
            Earn as you hire. Browse through a variety of services.
          </p>
          <SearchBar />
          <button className={styles.button}>
            Want to become a tasker? Post your first ad
          </button>
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

export default Hero;
