import { createSignal, For, onMount } from 'solid-js';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import styles from './ProductCarousel.module.css';

type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
};

const ProductCarousel = () => {
  const products: Product[] = [
    { 
      id: 1, 
      image: 'src/assets/razerviper.png', 
      name: 'Razer Cobra Pro Mouse', 
      price: '$92.13' 
    },
    { 
        id: 1, 
        image: 'src/assets/razerviper.png', 
        name: 'Razer Cobra Pro Mouse', 
        price: '$92.13' 
      },
      { 
        id: 1, 
        image: 'src/assets/razerviper.png', 
        name: 'Razer Cobra Pro Mouse', 
        price: '$92.13' 
      },
      { 
        id: 1, 
        image: 'src/assets/razerviper.png', 
        name: 'Razer Cobra Pro Mouse', 
        price: '$92.13' 
      },
      { 
        id: 2, 
        image: 'src/assets/razerviper.png', 
        name: 'Razer Cobra Pro Mouse', 
        price: '$92.13' 
      },
    // Add more products as needed
  ];

  let carouselRef: HTMLDivElement;

  onMount(() => {
    new Flickity(carouselRef, {
      cellAlign: 'left',
      contain: true,
      prevNextButtons: true,
      pageDots: false,
      wrapAround: true,
      draggable: true,
      freeScroll: true,
    });
  });

  return (
    <div>
      <div 
        class={styles.carouselContainer}
        ref={carouselRef}
      >
        <For each={products}>
          {(product) => (
            <div class={styles.productCard}>
              <div class={styles.productImageContainer}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  class={styles.productImage} 
                />
                <div class={styles.productImageOverlay}></div>
              </div>
              <div class={styles.productInfo}>
                <h3 class={styles.productName}>{product.name}</h3>
                <p class={styles.productPrice}>{product.price} USD</p>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default ProductCarousel;