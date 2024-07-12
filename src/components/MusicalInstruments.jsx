import Footer from './Footer';
import ProductCard from './ProductCard';
import './Products.css';

function MusicalInstruments() {
  const products = [
    { id: 1,title:"Vilan Melodic Heritage", image: '/musical_5.png', price: 100, description: 'Immerse yourself in the rich tones of the Vilan, a traditional string instrument renowned for its melodic depth and cultural significance. Crafted with precision and adorned with intricate detailing, it embodies centuries of musical tradition, perfect for enthusiasts and collectors alike.' },
    { id: 2, title:"Tabla Rhythmic Essence", image: '/musical_6.png', price: 150, description: 'Experience the rhythmic heartbeat of India with the Tabla, a percussion instrument beloved for its versatility and expressive range. Handcrafted from premium materials, each tabla resonates with clarity and resonance, making it essential for both classical performances and contemporary compositions.' },
    { id: 3,title:"Piano Elegance", image: '/piano.png', price: 200, description: 'Discover the timeless elegance of the Piano, a masterpiece of craftsmanship and musical excellence. Designed with precision engineering and crafted from finest materials, its resonant sound and responsive keys invite pianists of all levels to explore the limitless possibilities of music.' },
    { id: 4,title:"VibeCraft Drums", image: '/drums.png', price: 250, description: 'Unleash your rhythm with our Drum Set, a powerhouse of beats and dynamics. Engineered for performance and crafted with durable components, this versatile set ensures commanding presence and exceptional sound quality, perfect for stage performances and studio sessions alike' }
  ];

  return (
    <div className="products">
      <h1>Musical Instruments</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MusicalInstruments;
