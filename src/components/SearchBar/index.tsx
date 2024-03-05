import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import styles from './styles.module.css'; // Import your module.css file

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          placeholder="What do you need help with?"
        />
        <button className={styles.button}>
          <IoMdSearch className={styles.searchIcon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
