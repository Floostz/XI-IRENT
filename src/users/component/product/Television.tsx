import { useParams } from '@solidjs/router';
import Navbar from '../Navbar';
import styles from './television.module.css';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;

  const productData = {
    "1": {
      name: "27\" Odyssey G5 G55C QHD 165Hz Curved Gaming Monitor",
      model: "LS27CG552EEXXD",
      price: "$210.77 USD",
      available: true,
      image: "/src/assets/televisions.png",
      specifications: {
        resolution: "QHD (2,560 x 1,440)",
        aspectRatio: "16:9",
        screenCurvature: "1000R",
        brightness: "300cd/m²",
        responseTime: "1 (MPRT)",
        refreshRate: "Max 165Hz"
      }
    }
  };

  const product = productData[productId];

  return (
    <div class={styles.background}>
      <Navbar />
      <div class={styles.productContainer}>
        {product ? (
          <>
            <div class={styles.productImageSection}>
              <img src={product.image} alt={product.name} class={styles.productImage} />
            </div>
            
            <div class={styles.productDetails}>
              <h1 class={styles.productTitle}>{product.name}</h1>
              <p class={styles.productModel}>{product.model}</p>
              <p class={styles.productAvailability}>
                {product.available ? "Available" : "Out of Stock"}
              </p>
              
              <div class={styles.specifications}>
                <h2>Specifications</h2>
                <div class={styles.specsGrid}>
                  <div class={styles.specItem}>
                    <h3>Resolution</h3>
                    <p>{product.specifications.resolution}</p>
                  </div>
                  <div class={styles.specItem}>
                    <h3>Screen Curvature</h3>
                    <p>{product.specifications.screenCurvature}</p>
                  </div>
                  <div class={styles.specItem}>
                    <h3>Response Time</h3>
                    <p>{product.specifications.responseTime}</p>
                  </div>
                  <div class={styles.specItem}>
                    <h3>Aspect Ratio</h3>
                    <p>{product.specifications.aspectRatio}</p>
                  </div>
                  <div class={styles.specItem}>
                    <h3>Brightness (Typical)</h3>
                    <p>{product.specifications.brightness}</p>
                  </div>
                  <div class={styles.specItem}>
                    <h3>Refresh Rate</h3>
                    <p>{product.specifications.refreshRate}</p>
                  </div>
                </div>
              </div>

              <p class={styles.productPrice}>{product.price}</p>

              <button class={styles.addToCartButton}>
                🛒 Add to cart
              </button>
            </div>
          </>
        ) : (
          <h2>Product Not Found</h2>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
