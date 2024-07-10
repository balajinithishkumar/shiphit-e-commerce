import ProductCard from './ProductCard';
import Footer from './Footer';
import './Products.css';

function FoodProducts() {
  const products = [
    {
      id: 1,
      title: 'Homemade Sweets',
      image: '/food1.png',
      price: 10,
      description: 'Delight in the artistry of our Handcrafted Sweets, meticulously prepared to tantalize your taste buds. From timeless classics to innovative flavors, each confection offers a harmonious blend of quality ingredients and exquisite craftsmanship, perfect for indulging in moments of celebration or simply savoring a sweet treat.'
    },
    {
      id: 2,
      title: 'Masala Blends',
      image: '/food2.png',
      price: 15,
      description: 'Experience the essence of culinary mastery with our Masala Blends, meticulously crafted to elevate your dishes with rich aromas and distinctive flavors. Each blend is a testament to our commitment to quality and authenticity, ensuring every meal is a flavorful journey worth savoring.'
    },
    {
      id: 3,
      title: 'Ready-Made Packed Items',
      image: '/food3.png',
      price: 20,
      description: 'Streamline your dining experience with our Ready-Made Packed Items, thoughtfully curated for modern lifestyles. From hearty soups to wholesome meal kits, each item is prepared using premium ingredients and culinary expertise, offering convenient and nutritious solutions that bring joy to every mealtime.'
    },
    {
      id: 4,
      title: 'Artisan Biscuits',
      image: '/food4.png',
      price: 25,
      description: 'Elevate your tea or coffee break with our Artisan Biscuits, expertly baked to perfection and bursting with irresistible flavors. Crafted from the finest ingredients, these biscuits deliver a satisfying crunch and melt-in-your-mouth goodness, making them the perfect companion for any moment of indulgence.'
    }
  ];
  

  return (
    <div className="products">
      <h1>Food Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FoodProducts;