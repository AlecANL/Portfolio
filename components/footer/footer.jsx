import Link from 'next/link';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="wrapper">
        <div className={styles.footer__content}>
          <span>Brandon Alexei</span>
          <nav aria-label="social media navigation">
            <ul className={styles.footer__list}>
              <li>
                <Link href="https://github.com/AlecANL">
                  <a target="_blank">Github</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/brandon-alexei-alvarez-ab5b53173/">
                  <a target="_blank">Linkedin</a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Alexei_Alvarez4">
                  <a target="_blank">Twitter</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.frontendmentor.io/profile/AlecANL">
                  <a target="_blank">FrontendMentor</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
