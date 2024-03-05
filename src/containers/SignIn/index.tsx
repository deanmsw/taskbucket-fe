'use client';

import React, { useState } from 'react';
import styles from './styles.module.css'; // Import CSS module
import Link from 'next/link';
import PageContainer from '@/components/PageContainer';

const SignIn = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(e.target.value);

  const isError = input === '';

  return (
    <PageContainer title="Expert Sign In">
      <div className={styles.container}>
        <div className={styles.form}>
          <h1 className={styles.title}>Sign In</h1>
          <div className={styles.inputContainer}>
            <input
              type="email"
              value={input}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Email"
            />
            {!isError ? (
              <span className={styles.helperText}>
                Enter the email youd like to receive the newsletter on.
              </span>
            ) : (
              <span className={styles.errorMessage}>Email is required.</span>
            )}
          </div>
          <div className={styles.linkContainer}>
            <Link
              className={styles.forgotPasswordLink}
              href="/forgot-password"
              passHref
            >
              Forgot Password
            </Link>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Sign In</button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default SignIn;
