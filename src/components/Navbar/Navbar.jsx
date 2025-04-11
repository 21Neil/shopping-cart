import { Link } from 'react-router';
import styles from './Navbar.module.css';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <h1 className={styles.header__title}>Neil Shop</h1>
      </Link>
      <nav className={styles.header__navbar}>
        <ul className={styles.navbar__list}>
          <li>
            <Link to={'/'} className={styles.navbar__item}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'shop'} className={styles.navbar__item}>Shop</Link>
          </li>
          <li>
            <Link to={'shop'} className={styles.navbar__item}>
              <ShoppingBag color='black' size={28} strokeWidth={1.5} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
