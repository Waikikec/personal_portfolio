'use client';
import { signIn } from 'next-auth/react';
import React from 'react';

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          className={styles.input}
          required
        />
        <input
          type='password'
          placeholder='password'
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
        <button onClick={() => signIn('google')}>Login with Google</button>
      </form>
    </div>
  );
};

export default Login;
