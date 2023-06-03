import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro
            maxime vel cumque, harum consectetur enim tenetur nesciunt saepe
            incidunt vero, alias voluptatibus unde sequi eveniet corporis quas
            nulla ut nemo? Dignissimos quaerat explicabo iure velit quos nobis
            assumenda perferendis. Ullam aspernatur architecto, quaerat impedit
            voluptas alias aperiam accusamus, consectetur facere accusantium
            labore sint quas eum eveniet. Laborum alias perferendis eius? Nihil
            rem deserunt, ipsa repellendus aliquam odio non molestiae minima
            dolorum, perferendis omnis possimus facere saepe a eos tempora,
            inventore nam voluptate?
            <br />
            <br />
            Architecto eligendi dolor doloremque exercitationem provident atque
            voluptate consectetur, recusandae quaerat expedita reprehenderit
            possimus qui beatae. Enim possimus deleniti rerum adipisci minus
            veritatis mollitia blanditiis id. Mollitia libero dolorum cupiditate
            perferendis accusantium veniam. Officia accusantium deleniti
            laudantium necessitatibus sunt ipsa itaque natus distinctio
            laboriosam.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro
            maxime vel cumque, harum consectetur enim tenetur nesciunt saepe
            incidunt vero, alias voluptatibus unde sequi eveniet corporis quas
            nulla ut nemo? Dignissimos quaerat explicabo iure velit quos nobis
            assumenda perferendis. Ullam aspernatur architecto, quaerat impedit
            voluptas alias aperiam accusamus, consectetur facere accusantium
            labore sint quas eum eveniet. Laborum alias perferendis eius? Nihil
            rem deserunt, ipsa repellendus aliquam odio non molestiae minima
            dolorum, perferendis omnis possimus facere saepe a eos tempora,
            inventore nam voluptate?
            <br />
            <br />- Dynamic Websites
            <br />
            <br />- Fast and Handy
            <br />
            <br />- Mobile Applications
          </p>
          <Button url='contact' text='Contact' />
        </div>
      </div>
    </div>
  );
};

export default About;
