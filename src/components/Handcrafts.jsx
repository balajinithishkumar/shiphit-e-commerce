import Footer from './Footer';
import ProductCard from './ProductCard';
import './Products.css';

function Handcrafts() {
  const products = [
    { id: 1, 
      title:"",
       image: '/handcraft1.png', price: 20, description: 'Experience the artistry of our Handicrafted Pots, each one a unique blend of form and function. Meticulously shaped by skilled artisans, these pots bring a touch of natural elegance to your indoor or outdoor spaces, perfect for showcasing your favorite plants or flowers' },
    { id: 2, image: '/handcraft2.png', price: 25, description: 'Transform your surroundings with our Handicrafted Pots in Colorful Colors, vibrant hues that brighten any setting. Crafted with care and painted in a spectrum of shades, these pots not only hold your plants but also add a pop of cheerful charm to gardens, patios, or any corner of your home' },
    { id: 3, image: '/home-product1.png', price: 30, description: 'Introducing the Brass Decorative Tree – an embodiment of beauty and cultural reverence for your home decor. Crafted with meticulous detail, this brass masterpiece captures the sacred essence of the Kalpavriksha, symbolizing prosperity and fulfillment' },
    { id: 4, image: '/handcraft4.jpg', price: 35, description: 'Introducing our Fruits Bucket, a charming addition to your kitchen or dining area. Handicrafted from sturdy materials and designed with practicality in mind, it offers ample space for storing and displaying fresh fruits, ensuring both functionality and aesthetic appeal' }
  ];

  return (
    <div className="products">
      <h1>Handicrafts</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Handcrafts;