import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import ProductDetailPage from './pages/ProductDetailPage';
import WishlistPage from './pages/WishlistPage';
import ComparePage from './pages/ComparePage';
import RawComparePage from './pages/RawComparePage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/carts' element={<CartPage />} />
        <Route path='/wishlists' element={<WishlistPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/product/compare' element={<ComparePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
