import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nobis
            sapiente at hic iure, quibusdam corrupti perspiciatis odit
            exercitationem itaque dolor quae maiores optio unde dolorem.
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
            src='https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          ipsa dicta aliquid architecto deleniti rem quidem vel sunt, similique
          soluta excepturi totam sapiente expedita omnis earum magnam unde sit
          voluptate quam iusto magni repellat eaque! Alias suscipit vero quam
          perspiciatis? Sequi ratione officiis eum aperiam inventore voluptate
          voluptatum sit deleniti eligendi neque provident repellendus natus
          officia id, delectus, reiciendis quia mollitia odit. Quis repellat
          excepturi velit eum error praesentium nesciunt ipsa vel. Voluptate
          quaerat vel laudantium doloribus maxime, molestias consequatur nam sit
          et minima molestiae reprehenderit architecto, labore rem velit?
          Aliquam aspernatur placeat modi doloremque nam soluta esse doloribus
          eum tenetur voluptates vel, laudantium eius aliquid velit, eveniet
          voluptatibus similique repellendus? Atque, commodi libero sunt maiores
          eligendi odio eum, sed quo aperiam voluptatibus, animi tenetur quae
          voluptatum nesciunt! A ex ratione optio excepturi consequuntur vel
          quaerat fugiat modi quam accusamus voluptate temporibus, nulla,
          tempore doloribus sit repellat voluptatibus praesentium nihil,
          quisquam sequi earum recusandae nobis ipsam. Nobis corrupti rerum
          fuga! Consequatur quam suscipit neque est tenetur, dolorum itaque ipsa
          earum fugiat voluptates dolores perspiciatis libero illum! Sed omnis
          exercitationem inventore ratione culpa aspernatur fugiat accusantium
          numquam vero, nam, nemo, atque id. Animi quaerat perspiciatis adipisci
          esse aut, architecto sit a soluta harum, facere, ex excepturi ullam!
          Quibusdam consequuntur, ipsum vitae laudantium, voluptatem omnis
          quaerat asperiores at, aperiam amet sed? Ipsam dignissimos non
          perspiciatis, laboriosam molestias repellat facere asperiores ratione
          aliquam, quas veniam esse tempora, nisi ipsa! Molestiae sapiente
          reiciendis id ex ut eligendi quisquam asperiores voluptate quae
          deleniti voluptates cum modi, porro itaque blanditiis amet. Voluptatum
          officia, natus laboriosam modi recusandae sapiente reprehenderit
          possimus, hic tempore soluta ratione architecto tenetur inventore,
          delectus laborum id ea. Distinctio perferendis veniam nemo cupiditate
          corporis quidem voluptate provident quibusdam labore libero autem,
          cumque, temporibus nesciunt quo repudiandae sunt? In, mollitia
          laudantium delectus aperiam ex quod voluptas assumenda, debitis
          suscipit consequatur, beatae aut similique maxime eligendi cupiditate
          ratione? Recusandae alias repellat fuga voluptatem tempora maxime
          velit dolores quaerat sapiente, aliquid iusto architecto? Voluptatibus
          asperiores soluta enim nulla alias illo illum assumenda mollitia
          provident facere, quas quibusdam tempore dignissimos? Asperiores
          doloremque nulla corporis, architecto, veniam ab sunt reiciendis dolor
          qui nobis eveniet, accusamus totam odit perspiciatis quo? Quisquam
          ratione neque minus, quasi quidem voluptas animi sapiente numquam,
          quos aperiam possimus eius impedit maxime.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
