import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Outlet } from 'react-router';
import useCart from './hooks/useCart/useCart';

const App = ({ children }) => {
  const {addToCart, updateQuantity, removeFromCart, getItem, getTotal} = useCart()

  const cartItemQuantity = getItem().reduce((acc, curr) => acc + curr.quantity, 0);
  
  return (
    <>
      <Navbar {...{cartItemQuantity}} />
      {children ?? <Outlet context={[ addToCart, updateQuantity, removeFromCart, getItem, getTotal ]} />}
    </>
  );
};

export default App;
