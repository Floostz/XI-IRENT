import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router"; // Import useNavigate
import Navbar from "./component/Navbar";
import styles from "../styles/Pricelist.module.css";

const App: Component = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  return (
    <div class={styles.container}>
      <img
        src="images/classic_ghost_from_call_of_duty_by_pavseh_de3sfi6 1.png"
        alt="Call of Duty Ghost"
        loading="lazy"
        class={styles.backgroundImageBlackOps}
      />

      <Navbar />

      <main class={styles.mainContent}>
        <div class={styles.heroSection}>
          <div class={styles.heroTextBlackOps}>
            <h1>Capable specifications and recommended for playing</h1>
            <h2>You are able to eat, drink, and smoke</h2>
            <h3>Play single or multiplayer</h3>
          </div>
        </div>

        <div class={styles.chose1}>
          <h2>PLAYSTATION :</h2>
          <p>Available PS 3, 4, and 5. Please choose your seat.</p>
          <button class={styles.chooseButton} onClick={() => navigate("/warnet")}>
            SELECT
          </button>
        </div>

        <div class={styles.chose2}>
          <h2>WARNET :</h2>
          <p>VIP and non-VIP available with different specifications. Choose your seat.</p>
          <button class={styles.chooseButton2} onClick={() => navigate("/warnet")}>
            SELECT
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
