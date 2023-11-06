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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            veniam deleniti impedit vitae non sapiente debitis rerum quidem
            nihil similique corporis, dolore ab pariatur sint voluptas, sunt
            quia. Ab incidunt doloribus porro totam. Similique voluptate cumque
            corrupti consequatur amet ratione repellendus obcaecati provident
            doloremque ducimus quia necessitatibus recusandae, consequuntur
            maxime magni fuga et aut maiores eligendi non vitae quas
            exercitationem. Consequuntur tempora enim iste cupiditate quidem
            impedit consequatur aliquid labore mollitia accusamus, molestias
            quae explicabo aliquam sint eius vel perferendis eaque quo nulla
            itaque exercitationem sapiente modi non asperiores? Illum aut porro
            odio? Cum rem autem itaque placeat? Nihil, beatae.
          </p>
        </div>
      </Link>

      <Link href='/blog/testId2' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            alt=''
            src='https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg'
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Post 2</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            veniam deleniti impedit vitae non sapiente debitis rerum quidem
            nihil similique corporis, dolore ab pariatur sint voluptas, sunt
            quia. Ab incidunt doloribus porro totam. Similique voluptate cumque
            corrupti consequatur amet ratione repellendus obcaecati provident
            doloremque ducimus quia necessitatibus recusandae, consequuntur
            maxime magni fuga et aut maiores eligendi non vitae quas
            exercitationem. Consequuntur tempora enim iste cupiditate quidem
            impedit consequatur aliquid labore mollitia accusamus, molestias
            quae explicabo aliquam sint eius vel perferendis eaque quo nulla
            itaque exercitationem sapiente modi non asperiores? Illum aut porro
            odio? Cum rem autem itaque placeat? Nihil, beatae.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
