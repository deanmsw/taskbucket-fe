import React from 'react';
import styles from './styles.module.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

function PageContainer({ children }: any) {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
}

export default PageContainer;
