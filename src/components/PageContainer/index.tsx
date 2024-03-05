import React from 'react';
import styles from './styles.module.css';
import NavBar from '../NavBar';

function PageContainer({ children }: any) {
  return (
    <div className={styles.mainContainer}>
      <NavBar /> {children}
    </div>
  );
}

export default PageContainer;
