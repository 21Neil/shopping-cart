import Card from '../../components/Card/Card';
import styles from './Shop.module.css';
import Cart from '../../components/Cart/Cart';
import useFetch from '../../hooks/useFetch/useFetch';
import { useOutletContext } from 'react-router';

const api = 'https://fakestoreapi.com/products';

const CardContainer = ({ addToCart }) => {
  const { data, error, loading } = useFetch(api);

  if (loading)
    return (
      <main className={styles.shopContainer}>
        <h2>Loading...</h2>
      </main>
    );
  if (error)
    return (
      <main className={styles.shopContainer}>
        <h2>A network error was encountered</h2>
      </main>
    );

  return (
    <main className={styles.shopContainer}>
      {data.map(item => (
        <Card key={item.id} {...{ item, addToCart }} />
      ))}
    </main>
  );
};

const Shop = ({ cart }) => {
  const [addToCart, updateQuantity, removeFromCart, getItem, getTotal] = useOutletContext();

  return (
    <>
      {cart ? (
        <Cart {...{ updateQuantity, removeFromCart, getItem, getTotal }} />
      ) : (
        <CardContainer {...{ addToCart }} />
      )}
    </>
  );
};

export default Shop;
