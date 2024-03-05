import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link className={styles.navbar__title} href="/">
        Task Bucket
      </Link>
      <div className={styles.navbarItems}>
        <Link className={styles.navbar__item} href="/categories">
          Categories
        </Link>
        <Link className={styles.navbar__item} href="/taskbucks/learn-more">
          What are TaskBucks?
        </Link>
        <Link className={styles.navbar__item} href="/about">
          About Us
        </Link>
      </div>
      <div className={styles.navbarItems}>
        <Link className={styles.navbar__item} href="/sign-in">
          Sign In
        </Link>
        <Link className={styles.navbar__item} href="/sign-up">
          Sign Up
        </Link>
        <Link className={styles.navbar__button} href="/sign-up">
          Become a Seller
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
