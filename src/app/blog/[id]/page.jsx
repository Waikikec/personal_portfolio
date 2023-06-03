import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quas magni reiciendis quo voluptate expedita natus qui!
            Alias, eaque veniam!
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/users/avatars/170195/icons8-509.png?auto=compress&fit=crop&h=50&w=50&dpr=1'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Martin</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          possimus perferendis odio consectetur, minus enim iusto aliquam. Ipsam
          quibusdam nihil dicta quis neque commodi consequatur qui magni
          laudantium placeat exercitationem nobis eius doloribus voluptatum
          facere nulla, nisi aliquid temporibus animi aut autem ad in labore
          nam! Odit porro ullam voluptate quasi, eaque placeat? Illum qui,
          nostrum accusantium, tenetur natus, quis iusto quo corrupti nisi
          reiciendis nesciunt! Eius amet explicabo officiis exercitationem,
          repellat aliquid eum labore minima fugiat veniam, maiores laudantium
          at doloremque accusamus dignissimos ab? Exercitationem sequi delectus
          a soluta id? Corrupti libero iure inventore sunt provident est omnis
          ipsam?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
