import Card from '../../components/Card/Card';
import styles from './Shop.module.css';
import Cart from '../../components/Cart/Cart';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

const api = 'https://fakestoreapi.com/products';

const CardContainer = ({ addToCart }) => {
  const { data, error, loading } = useFetch(api);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <main className={styles.shopContainer}>
      {data.map(item => (
        <Card key={item.id} {...{ item, addToCart }} />
      ))}
    </main>
  );
};

const Shop = ({ cart }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = item => {
    const tempCart = [...cartItems];
    const target = tempCart.find(tempItem => tempItem.id === item.id);
    if (target) target.quantity = target.quantity + item.quantity;
    if (!target) tempCart.push(item);
    setCartItems([...tempCart]);
  };

  return <>{cart ? <Cart /> : <CardContainer {...{ addToCart }} />}</>;
};

export default Shop;
