import Navbar from "./component/Navbar";
import Carousel from "./component/carousel"; 
import styles from "../styles/product.module.css";
import Sled from "./component/slider"

const App = () => {
  return (
    <div class={styles.containerProduct}>
      <div class={styles.backgroundImageProduct}></div>
      <Navbar />

      <main class={styles.mainContentProduct}>
        <Carousel />
      </main>
      <main class={styles.slider}>
        <Sled />
      </main>
    </div>
    
  );
};

export default App;
