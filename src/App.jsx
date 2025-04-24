import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Outlet } from 'react-router';
import useCart from './hooks/useCart/useCart';

const App = ({ children }) => {
  const {cartItems, addToCart} = useCart()
  
  return (
    <>
      <Navbar />
      {children ?? <Outlet context={[cartItems, addToCart]} />}
    </>
  );
};

export default App;
