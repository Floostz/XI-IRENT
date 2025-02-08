import { Component } from 'solid-js';
import Navbar from './component/Navbar';
import styles from '../styles/landing.module.css';

const App: Component = () => {
  return ( 
    <div class={styles.container}>
      <Navbar />

      {/* Background Image */}
      <img
        src="src/assets/fonts/sun_wukong__black_myth__render_by_eternalashen_di47cip 1.png"
        alt="Sun Wukong Render"
        loading="lazy"
        class={styles.backgroundImageWukong}
      />

      <main class={styles.mainContent}>
        <div class={styles.heroSection}>
          <div class={styles.heroText}>
            <h1>
              <span>Play games smoothly and enjoyably</span>
            </h1>
            <p>Affordable prices and there are always interesting promotions every month</p>
          </div>
          <div class={styles.gameCardContainer}></div>
        </div>

        <div class={styles.locationSection}>
          <h2>Location</h2>
          <p>Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec. Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53147</p>
        </div>
      </main>
    </div>
  );
};

export default App;
