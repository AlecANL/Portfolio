import Link from 'next/link';
import Image from 'next/image';
import ctx from 'classnames';
import styles from './card-project.module.css';

function CardProject({ project }) {
  return (
    <article className={styles.card__project}>
      <div className={styles.card__cover}>
        <Image
          src={project.cover}
          alt="simple avatar"
          width={1000}
          height={580}
        />
      </div>
      <div className={styles.card__description}>
        <h3 className={styles.project__heading}>{project.name}</h3>
        <p className={styles.project__description}>{project.description}</p>
        <div className={styles.project__links}>
          <Link href={project.url_repo}>
            <a
              className={ctx(styles.button, styles.is__transparent)}
              target="_blank"
            >
              Ver código
            </a>
          </Link>
          <Link href={project.live_demo}>
            <a className={ctx(styles.button, styles.is__blue)} target="_blank">
              Ver proyecto
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CardProject;
