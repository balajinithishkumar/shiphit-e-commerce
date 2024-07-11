import Footer from './Footer';
import ProductCard from './ProductCard';
import './Products.css';

function Handcrafts() {
  const products = [
    { id: 1, 
      title:"",
       image: '/handicraft1.png', price: 20, description: 'The Aranmula Kannadi, a handmade metal-alloy mirror from Aranmula, Kerala, is highly auspicious. Crafted by five artisan families, it offers a unique front surface reflection, eliminating secondary reflections. Polished for days, it reveals ones true image, a technique kept secret for generations.' },
    { id: 2, image: '/handicraft2.png', price: 25, description: 'Explore the exotic charm of our Handcrafted Elephant collection. Adorn your space with these intricate artworks, meticulously crafted to embody the grace and majesty of elephants. Each piece showcases unique details, making it a captivating addition to your decor.' },
    { id: 3, image: '/handicraft10.png', price: 30, description: 'Handcrafted with meticulous detail, this exquisite brass decorative tree captures the sacred essence of the Kalpavriksha, symbolizing prosperity and fulfillment. Each piece reflects the rich cultural heritage and artistry of skilled artisans' },
    { id: 4, image: '/handicraft8.png', price: 35, description: 'We offer a variety of Indian handicrafts, including brass, metal, wooden, and antique items. As a prominent exporter, we source these goods from reliable vendors. Our products are ideal for decorating offices and homes, enhancing their look with different designs and finishes. Features include lightweight, breakage-free, and glossy surface finish' }
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