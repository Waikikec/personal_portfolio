import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 Martin Yankov. All rights reserved.</div>
      <div>Logos</div>
    </div>
  );
};

export default Footer;
