import ProductCard from "./ProductCard";
import "./Products.css";
import Footer from "./Footer";

function Paintings() {
  const products = [
    {
      id: 1,
      image: "/painting1.png",
      price: 200,
      description:
        "Peacock Indian Painting, a stunning portrayal of nature's beauty and cultural symbolism. Handcrafted with vibrant colors and intricate details, this artwork captures the grace and splendor of the peacock, revered in Indian tradition as a symbol of grace and beauty.",
    },
    {
      id: 2,
      image: "/painting2.png",
      price: 300,
      description:
        "God Painting, a divine portrayal crafted with intricate detail and vibrant colors. This artwork captures the essence of spirituality and reverence, embodying the rich cultural heritage and artistic expression found in depictions of deities",
    },
    {
      id: 3,
      image: "/painting3.png",
      price: 400,
      description:
        "Peacock Indian Painting, a mesmerizing rendition celebrating natures allure and cultural symbolism. Crafted with vibrant hues and meticulous details, this artwork captures the majestic grace and splendor of the peacock a revered symbol of beauty and elegance in Indian tradition.",
    },
    {
      id: 4,
      image: "/painting5.png",
      price: 500,
      description:
        "Bundi Palace Painting from Rajasthan, a masterpiece depicting the rich heritage of the region. Handcrafted with intricate detail, this painting captures the majestic architecture and vibrant colors of Rajasthan's royal past. Perfect for adding a touch of cultural elegance to any space.",
    },
  ];

  return (
    <div className="products">
      <h1>Paintings</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Paintings;
