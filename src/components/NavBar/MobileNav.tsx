'use client';

import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import styles from './styles.module.css';
import Link from 'next/link';

function MobileNav({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: (arg: boolean) => void;
}) {
  return (
    <div className={styles.hamburgerMenu}>
      {showMenu === false ? <MdMenu fontSize="32px" /> : null}
      {showMenu ? (
        <div className={styles.menu}>
          <Link className={styles.dropdownItem} href="/">
            Home
          </Link>
          <Link className={styles.dropdownItem} href="/tasks">
            Tasks
          </Link>
          <Link className={styles.dropdownItem} href="/categories">
            Categories
          </Link>
          <Link className={styles.dropdownItem} href="/account">
            Account
          </Link>
          <button onClick={() => setShowMenu(false)}>X</button>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNav;
