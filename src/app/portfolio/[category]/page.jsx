import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Fusion Art</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            illo modi quas incidunt dignissimos eum rem minima corporis,
            asperiores deserunt tempora nostrum qui odit minus voluptate
            pariatur soluta iure facilis, enim quisquam eaque, nisi eveniet
            dolores sapiente. Debitis ipsam exercitationem, ea aperiam, ex nulla
            id architecto laborum sapiente quasi culpa? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ratione illo modi quas incidunt
            dignissimos eum rem minima corporis, asperiores deserunt tempora
            nostrum qui odit minus voluptate pariatur soluta iure facilis, enim
            quisquam eaque, nisi eveniet dolores sapiente. Debitis ipsam
            exercitationem, ea aperiam, ex nulla id architecto laborum sapiente
            quasi culpa?
          </p>
          <Button url='#' text='See More' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt=''
            className={styles.img}
            fill={true}
            src='https://images.pexels.com/photos/18325774/pexels-photo-18325774/free-photo-of-cheese-daisy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Abstract Fusion</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            facere praesentium natus, quidem doloremque, ipsam cum suscipit
            eligendi sunt eius laudantium voluptate nostrum! Rerum ad, labore
            corrupti dolorem reprehenderit deserunt libero blanditiis? Maxime
            sapiente quod eaque molestias, minima dicta harum cumque
            voluptatibus accusamus in assumenda ex maiores ea quae, quidem
            voluptatum unde enim nemo exercitationem consequuntur cupiditate.
            Laborum explicabo et inventore cum necessitatibus esse harum
            quisquam adipisci animi. Deleniti praesentium officiis illo neque
            aut! Repellendus ducimus molestiae rerum nemo alias provident!
            Eligendi maxime aliquam, molestiae dolores autem natus magni quod,
            ipsum sunt, asperiores quos dolorum ratione. Rerum porro ea
            eligendi?
          </p>
          <Button url='#' text='See More' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt=''
            className={styles.img}
            fill={true}
            src='https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Walls of sorrow</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            corrupti. Neque velit sit aliquam distinctio provident sequi quidem
            minima mollitia laborum nam necessitatibus aperiam ducimus saepe
            aut, voluptatibus beatae earum maiores reiciendis soluta et officiis
            dolore debitis libero. Officia vero libero ut, earum natus culpa.
            Eius suscipit repellendus nostrum deserunt sed sit maiores tempore
            quae esse asperiores doloremque nesciunt natus eum quia fuga quam
            repellat nihil quo dolores, dolor, nulla voluptatem delectus iure!
            Neque veritatis animi libero dicta laboriosam, at atque officiis
            maiores! Consequatur ratione dolore incidunt distinctio corporis,
            illum totam temporibus accusantium porro quae voluptate officiis
            fuga error hic quas voluptas suscipit molestiae obcaecati aliquid
            aut excepturi!
          </p>
          <Button url='#' text='See More' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt=''
            className={styles.img}
            fill={true}
            src='https://images.pexels.com/photos/971546/pexels-photo-971546.jpeg'
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
