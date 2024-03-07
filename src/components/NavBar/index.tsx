'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import MobileNav from './mobileNav';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link className={styles.navbar__title} href="/">
          Task Bucket
        </Link>

        <div className={styles.navbarItemsBlock}>
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
      </div>
      <div onClick={handleClick}>
        <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  );
}

export default NavBar;
