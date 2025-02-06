import { Component } from 'solid-js';
import styles from '../component/styles/Hero.module.css';

const Hero: Component = () => {
  return (
    <div class={styles.hero}>
      <div class={styles.content}>
        <h1>Play games smoothly and enjoyably</h1>
        <p>Affordable prices and there are always interesting promotions every month</p>
        <div class={styles.location}>
          <h3>Location</h3>
          <p>Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec. Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53147</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

