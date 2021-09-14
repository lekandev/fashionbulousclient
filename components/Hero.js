import Link from "next/link";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__info}>
        <h1 className={styles.hero__title}>Fashionbulous</h1>
        <p className={styles.hero__tagline}>
          Where creativity meets talent and fashion.
        </p>
        <a className={styles.hero__button} href="/shop">
          Shop
        </a>
      </div>

      {/* <img src="/assets/line.png" alt="" className="hero__line--1" />
      <img src="/assets/line.png" alt="" className="hero__line--2" /> */}
    </div>
  );
};

export default Hero;
