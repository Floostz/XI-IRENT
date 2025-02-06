import { createSignal } from "solid-js";
import styles from "../styles/carousel.module.css";

const images = [
  "/src/assets/image1.png",
  "/src/assets/image2.png",
  "/src/assets/image3.png",
  "/src/assets/image4.png",
];

const Carousel = () => {
  return (
    <div class={styles.carouselContainer}>
      <div class={styles.carouselTrack}>
        {[...images, ...images].map((image, index) => (
          <img src={image} alt={`carousel-${index}`} class={styles.carouselImage} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
