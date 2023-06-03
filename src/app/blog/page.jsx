import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/testId' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            alt=''
            src='https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Post</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            aliquam culpa facilis architecto! Corrupti similique sit, rerum
            iure, ex tempora dicta architecto facere dolorum ut consequuntur
            corporis mollitia atque laudantium odio soluta possimus deserunt.
          </p>
        </div>
      </Link>

      <Link href='/blog/testId2' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            alt=''
            src='https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Post</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            aliquam culpa facilis architecto! Corrupti similique sit, rerum
            iure, ex tempora dicta architecto facere dolorum ut consequuntur
            corporis mollitia atque laudantium odio soluta possimus deserunt.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
