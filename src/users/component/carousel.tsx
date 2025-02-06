import { onMount } from 'solid-js';
import styles from './Carousel.module.css';

const Carousel = () => {
  const images = [
    'src/assets/grandturismo.png',
    'src/assets/efootballs.png',
    'src/assets/cod.png',
    'src/assets/blackmyth.png',
    'src/assets/grandturismo.png',
    'src/assets/efootballs.png',
    'src/assets/cod.png',
    'src/assets/blackmyth.png',
    'src/assets/grandturismo.png',
    'src/assets/efootballs.png',
    'src/assets/cod.png',
    'src/assets/blackmyth.png',
    'src/assets/grandturismo.png',
    'src/assets/efootballs.png',
    'src/assets/cod.png',
    'src/assets/blackmyth.png',

  ];

  onMount(() => {
    // Duplicate the images to create the infinite scroll effect
    const carouselInner = document.querySelector(`.${styles.carouselInner}`);
    carouselInner.innerHTML += carouselInner.innerHTML;
  });

  return (
    <div class={styles.carousel}>
      <div class={styles.carouselInner}>
        {images.map((img, index) => (
          <div class={styles.carouselItem} key={index}>
            <img src={img} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Carousel;