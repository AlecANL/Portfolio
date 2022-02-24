import Image from 'next/image';
import styles from '../styles/projects.module.css';

function Projects() {
  return (
    <main className={styles.main}>
      <Image
        src="/construction.svg"
        width={400}
        height={400}
        alt="construction illustration"
      />
      <h1>Comming soon...</h1>
    </main>
  );
}

export default Projects;
