import ProductCard from "./ProductCard";
import "./Products.css";
import Footer from "./Footer";

function Paintings() {
  const products = [
    {
      id: 1,
      image: "/paintings1.jpg",
      price: 200,
      description:
        "Elevate your space with our Abstract Canvas Art, where vibrant colors and fluid forms converge to create a visual symphony. Each piece is meticulously hand-painted by skilled artists, offering a contemporary focal point that sparks imagination and conversation in any room.",
    },
    {
      id: 2,
      image: "/paintings2.jpg",
      price: 300,
      description:
        "Transport yourself to serene vistas with our Landscape Oil Painting collection. Crafted with meticulous brushstrokes and rich textures, these paintings capture the beauty of nature in vivid detail, bringing a sense of tranquility and harmony to your walls.",
    },
    {
      id: 3,
      image: "/paintings3.jpg",
      price: 400,
      description:
        "Embrace modernity with our collection of Modern Art Prints, featuring bold designs and striking compositions. Printed on high-quality materials with archival inks, these artworks combine artistic innovation with lasting durability, making them a stylish addition to any art lovers collection.",
    },
    {
      id: 4,
      image: "/paintings4.jpg",
      price: 500,
      description:
        "Celebrate the beauty of everyday objects with our Still Life Watercolor Prints. Delicately rendered in soft hues and subtle gradients, each print captures the essence of simplicity and sophistication, adding a touch of timeless elegance to your home décor.",
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