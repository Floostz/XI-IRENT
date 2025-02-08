import { createSignal, For, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';
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
  const navigate = useNavigate(); // Router navigation function

  const products: Product[] = [
    { id: 1, image: 'src/assets/razerviper.png', name: 'Razer Cobra Pro Mouse', price: '$92.13' },
    { id: 2, image: 'src/assets/image/headset.png', name: 'Gaming Headset', price: '$59.99' },
    { id: 4, image: 'src/assets/image/stering.png', name: 'Gaming Steering Wheel', price: '$199.99' },
    { id: 5, image: 'src/assets/image/stering.png', name: 'Gaming Steering Wheel', price: '$199.99' },
    { id: 6, image: 'src/assets/image/stering.png', name: 'Gaming Steering Wheel', price: '$199.99' },
    { id: 7, image: 'src/assets/image/stering.png', name: 'Gaming Steering Wheel', price: '$199.99' },
    { id: 8, image: 'src/assets/image/stering.png', name: 'Gaming Steering Wheel', price: '$199.99' },
    { id: 9, image: 'src/assets/image/stering.png', name: 'Gaming Steering Wheel', price: '$199.99' },
    { id: 10, image: 'src/assets/image/stering.png', name: 'Gaming Steering Wheel', price: '$199.99' },
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

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`); // Navigate to product detail page
  };

  return (
    <div>
      <div 
        class={styles.carouselContainer}
        ref={carouselRef}
      >
        <For each={products}>
          {(product) => (
            <div 
              class={styles.productCard} 
              onClick={() => handleProductClick(product.id)} // Click handler
            >
              <div class={styles.productImageContainer}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
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
