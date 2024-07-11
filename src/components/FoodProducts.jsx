import ProductCard from './ProductCard';
import Footer from './Footer';
import './Products.css';

function FoodProducts() {
  const products = [
    {
      id: 1,
      title: 'Homemade Sweets',
      image: '/sweets.png',
      price: 10,
      description: 'Delight in the artistry of our Homemade Sweets, meticulously prepared to tantalize your taste buds. From timeless classics to innovative flavors, each confection offers a harmonious blend of quality ingredients and exquisite craftsmanship, perfect for indulging in moments of celebration or simply savoring a sweet treat.'
    },
    {
      id: 2,
      title: 'Masala Blends',
      image: '/masala.png',
      price: 15,
      description: 'Experience the essence of culinary mastery with our Masala Blends, meticulously crafted to elevate your dishes with rich aromas and distinctive flavors. Each blend is a testament to our commitment to quality and authenticity, ensuring every meal is a flavorful journey worth savoring.'
    },
    {
      id: 3,
      title: 'Taste of India Snack',
      image: '/food1.png',
      price: 20,
      description: "Discover the ultimate Snack Pack from India! Experience a delightful mix of sweet, salty, and savory snacks that cater to every craving. Our selection changes monthly, ensuring fresh surprises each time. Customization options available upon request. Happy Snacking!"
    },
    {
      id: 4,
      title: 'Fruit Biscuit',
      image: '/food6.png',
      price: 25,
      description: 'Elevate your tea or coffee break with our Fruit Biscuit, expertly baked to perfection and bursting with irresistible flavors. Crafted from the finest ingredients, these biscuits deliver a satisfying crunch and melt-in-your-mouth goodness, making them the perfect companion for any moment of indulgence.'
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