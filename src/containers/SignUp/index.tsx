import React from 'react';
import styles from './styles.module.css'; // Import CSS module
import PageContainer from '@/components/PageContainer';

const SignUp = () => {
  return (
    <PageContainer title="Expert SignUp">
      <div className={styles.container}>
        <div className={styles.form}>
          <h1 className={styles.title}>Sign Up</h1>
          <div className={styles.inputContainer}>
            <input
              name="firstName"
              className={styles.input}
              placeholder="First Name"
              type="text"
              required
            />
            <input
              name="lastName"
              className={styles.input}
              placeholder="Last Name"
              type="text"
              required
            />
            <input
              name="email"
              className={styles.input}
              placeholder="Email"
              type="email"
              required
            />
            <input
              name="password"
              className={styles.input}
              placeholder="Password"
              type="password"
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Sign Up</button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default SignUp;
