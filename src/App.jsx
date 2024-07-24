import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Handcrafts from './components/Handcrafts';
import MusicalInstruments from './components/MusicalInstruments';
import Paintings from './components/Paintings';
import FoodProducts from './components/FoodProducts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/handicrafts" element={<Handcrafts />} />
        <Route path="/products/musical-instruments" element={<MusicalInstruments />} />
        <Route path="/products/paintings" element={<Paintings />} />
        <Route path="/products/food-products" element={<FoodProducts />} />
      </Routes>
    </div>
  );
}

export default App;