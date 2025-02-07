import { Component } from 'solid-js';
import Navbar from './component/Navbar';
import styles from '../styles/Pricelist.module.css';

const App: Component = () => {
  return (
    <div class={styles.container}>
      <img
        src="src/assets/fonts/classic_ghost_from_call_of_duty_by_pavseh_de3sfi6 1.png"
        alt="Call of Duty Ghost"
        class={styles.backgroundImageBlackOps}
      />

      <Navbar />

      <main class={styles.mainContent}>
        <div class={styles.heroSection}>
          <div class={styles.heroTextBlackOps}>
            <h1>
              Capable specifications and recommended for playing
            </h1>
            <h2>
              You able to eat, drink and smoke
            </h2>
            <h3>
            Play single or multiplayer
            </h3>
          </div>
        </div>

        <div class={styles.chose1}>
          <h2>PLAYSTATION :</h2>
          <p>available ps 3 4 and 5, please choose your seat</p>
          <button class={styles.chooseButton}>SELECT</button> {/* Button added here */}
        </div>
        <div class={styles.chose2}>
          <h2>WARNET :</h2>
  
          <p>VIP and non-VIP available with different specifications choose your seat</p>
          <button class={styles.chooseButton2}>SELECT</button> {/* Button added here */}
        </div>
      </main>
    </div>
  );
};

export default App;
