import { For, onCleanup, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./ProductCarousel.module.css";

type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
};

const ProductCarousel = () => {
  const navigate = useNavigate();
  let swiperContainer!: HTMLDivElement;
  let swiperInstance: Swiper | null = null;

  const products: Product[] = [
    { id: 1, image: "src/assets/Television.png", name: '27" Odyssey G5 G55C Monitor', price: "$210.77 USD" },
    { id: 2, image: "src/assets/Television.png", name: "Gaming Monitor", price: "$320.99 USD" },
    { id: 3, image: "src/assets/Television.png", name: "UltraWide Monitor", price: "$450.00 USD" },
    { id: 4, image: "src/assets/Television.png", name: "UltraWide Monwitor", price: "$450.00 USD" },
    { id: 6, image: "src/assets/Television.png", name: "UltraWide Monsitor", price: "$450.00 USD" },
    { id: 7, image: "src/assets/Television.png", name: "UltraWide Monwitor", price: "$450.00 USD" },
    { id: 7, image: "src/assets/Television.png", name: "UltraWide Monwitor", price: "$450.00 USD" },
    { id: 7, image: "src/assets/Television.png", name: "UltraWide Monwitor", price: "$450.00 USD" },
   
  ];

  onMount(() => {
    swiperInstance = new Swiper(swiperContainer, {
      modules: [Navigation, Pagination],
      slidesPerView: 6, // Ensure multiple slides are visible
      spaceBetween: 60,
      loop: true,
      navigation: { enabled: true },
      pagination: { clickable: true },
    });
  });

  onCleanup(() => {
    swiperInstance?.destroy();
  });

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div class={styles.carouselContainer}>
      <div class="swiper" ref={(el) => (swiperContainer = el)}>
        <div class="swiper-wrapper">
          <For each={products}>
            {(product) => (
              <div class="swiper-slide">
                <div class={styles.productCard} onClick={() => handleProductClick(product.id)}>
                  <div class={styles.productImageContainer}>
                    <img src={product.image} alt={product.name} loading="lazy" class={styles.productImage} />
                    <div class={styles.productImageOverlay}></div>
                  </div>
                  <div class={styles.productInfo}>
                    <h3 class={styles.productName}>{product.name}</h3>
                    <p class={styles.productPrice}>{product.price}</p>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default ProductCarousel;
