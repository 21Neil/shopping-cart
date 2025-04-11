import React from 'react';
import styles from './Home.module.css';
import Button from '../../components/Button/Button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <h2 className={styles.home__header}>Neil Shop</h2>
      <div>
        <Link to={'/'}>
          <Button>
            Shopping now{' '}
            <ExternalLink color='black' size={16} strokeWidth={2} />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
