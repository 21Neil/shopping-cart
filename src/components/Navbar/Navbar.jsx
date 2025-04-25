import { Link } from 'react-router';
import styles from './Navbar.module.css';
import { ShoppingBag } from 'lucide-react';

const Navbar = ({ cartItemQuantity }) => {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <h1 className={styles.header__title}>Neil Shop</h1>
      </Link>
      <nav className={styles.header__navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link to={'shop'}>Shop</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link to={'shop/cart'}>
              <ShoppingBag color='black' size={28} strokeWidth={1.5} />
            </Link>
            <span className={styles.cartItemQuantity}>{cartItemQuantity > 99 ? 99 : cartItemQuantity}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
