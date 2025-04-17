import Card from '../../components/Card/Card';
import styles from './Shop.module.css';
import Cart from '../../components/Cart/Cart'

const CardContainer = () => {
  return (
    <main className={styles.shopContainer}>
      <Card />
      <Card />
    </main>
  );
};

const Shop = ({ cart }) => {
  console.log(cart)
  return <>{cart ? <Cart /> : <CardContainer />}</>;
};

export default Shop;
