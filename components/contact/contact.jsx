import Link from 'next/link';
import styles from './contact.module.css';

function Contact() {
  return (
    <section className={styles.contact}>
      <div className="wrapper">
        <div>
          <h3 className={styles.contact__heading}>
            ¿Quieres trabajar conmigo? ¡Hazme ping!
          </h3>
          <span className={styles.contact__mail}>
            <Link href="mailto:alexeialvarez4@gmail.com">
              <a>alexeialvarez4@gmail.com</a>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
