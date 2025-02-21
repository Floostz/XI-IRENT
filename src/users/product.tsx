import Navbar from "./component/Navbar";
import Carousel from "./component/carousel"; 
import styles from "../styles/product.module.css";
import Sled from "./component/slider"

const App = () => {
  return (
    <div class={styles.containerProduct}>
      <div class={styles.backgroundImageProduct}> <h1> Discover your favorite game genres </h1> </div>
      <Navbar />

      <main class={styles.mainContentProduct}> 
        
        <Carousel />
      </main>
      <main class={styles.slider}>
      <h1> and also upgrading your gears</h1>
        <Sled />
      </main>
    </div>
    
  );
};

export default App;
