import { useParams } from '@solidjs/router';
import Navbar from '../Navbar'; // Import your navbar
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;

  // Sample product data
  const productData = {
    "1": {
      name: "27\" Odyssey G5 G55C QHD 165Hz Curved Gaming Monitor",
      model: "LS27CG552EEXXD",
      price: "$210.77 USD",
      available: true,
      image: "/src/assets/razerviper.png", // Replace with correct image path
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
      <Navbar /> {/* Navbar from your component */}
      <div class={styles.productContainer}>
        {product ? (
          <>
            <div class={styles.productImageSection}>
              <img src={product.image} alt={product.name} class={styles.productImage} />
            </div>
            
            <div class={styles.productDetails}>
              <h1 class={styles.productTitle}>{product.name}</h1>
              <p class={styles.productModel}>{product.model}</p>
              <p class={styles.productAvailability}>{product.available ? "Available" : "Out of Stock"}</p>
              
              <div class={styles.specifications}>
                <h2>Specifications</h2>
                <ul>
                  <li><strong>Resolution:</strong> {product.specifications.resolution}</li>
                  <li><strong>Aspect Ratio:</strong> {product.specifications.aspectRatio}</li>
                  <li><strong>Screen Curvature:</strong> {product.specifications.screenCurvature}</li>
                  <li><strong>Brightness (Typical):</strong> {product.specifications.brightness}</li>
                  <li><strong>Response Time:</strong> {product.specifications.responseTime}</li>
                  <li><strong>Refresh Rate:</strong> {product.specifications.refreshRate}</li>
                </ul>
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
