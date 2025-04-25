import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Outlet } from 'react-router';
import useCart from './hooks/useCart/useCart';

const App = ({ children }) => {
  const {cartItems, addToCart, getItem} = useCart()

  const cartItemQuantity = getItem().reduce((acc, curr) => acc + curr.quantity, 0);
  
  return (
    <>
      <Navbar {...{cartItemQuantity}} />
      {children ?? <Outlet context={[cartItems, addToCart]} />}
    </>
  );
};

export default App;
