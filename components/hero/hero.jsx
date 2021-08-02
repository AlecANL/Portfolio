import Image from 'next/image';
import ctx from 'classnames';
import style from './hero.module.css';

function Hero() {
  return (
    <section className={style.hero} aria-label="hero section about myself">
      <div className="wrapper">
        <div className={style.hero__content}>
          <div className={style.hero__avatar}>
            <Image
              src="/avatar2.jpg"
              alt="alec's avatar"
              width={80}
              height={80}
            />
          </div>
          <div>
            <h1 className={style.hero__heading}>Brandon Alexei</h1>
            <h2 className={style.hero__description}>
              Soy un Frontend, centrado en la creación de productos digitales,
              que inspiran y atraen a las personas
            </h2>
            <p className={style.hero__about}>
              Me encanta centrarme en los detalles de las experiencias de nuevos
              productos con una implementación en código perfecta. Pero los
              grandes productos no comienzan ahí, comienzan con una sólida
              colaboración con los compañeros de equipo de investigación,
              ingeniería y productos para comprender los problemas y las
              circunstancias de los clientes.
            </p>
          </div>
          <button className={ctx(style.hero__button, style.is__blue)}>
            <a href="/cv.pdf" download="alexei_cv.pdf">
              Descargar currículum
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
