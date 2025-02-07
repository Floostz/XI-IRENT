import { useParams } from '@solidjs/router';
import { Show } from 'solid-js';

const ProductPage = () => {
  const params = useParams(); // Get product ID from URL
  const productId = params.id;

  // Dummy product data with different layouts
  const productData = {
    "1": { name: "Razer Cobra Pro Mouse", price: "$92.13", image: "src/assets/razerviper.png", layout: "mouse" },
    "2": { name: "Gaming Headset", price: "$59.99", image: "src/assets/image/headset.png", layout: "headset" },
    "3": { name: "Gaming Steering Wheel", price: "$199.99", image: "src/assets/image/stering.png", layout: "steering" },
  };

  const product = productData[productId];

  return (
    <div>
      <Show when={product} fallback={<h2>Product Not Found</h2>}>
        <h1>{product?.name}</h1>
        <img src={product?.image} alt={product?.name} />

        {/* Render different layouts based on the product type */}
        <Show when={product?.layout === "mouse"}>
          <p>This is a gaming mouse with RGB lighting.</p>
        </Show>

        <Show when={product?.layout === "headset"}>
          <p>This is a high-quality gaming headset with surround sound.</p>
        </Show>

        <Show when={product?.layout === "steering"}>
          <p>This is a steering wheel for racing games with force feedback.</p>
        </Show>

        <p>Price: {product?.price}</p>
      </Show>
    </div>
  );
};

export default ProductPage;
